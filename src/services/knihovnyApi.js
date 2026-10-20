/**
 * Služba pro komunikaci s veřejným API katalogu Knihovny.cz
 *
 * Specifikace API:
 * - GET https://www.knihovny.cz/api/v1/search
 * - Volání přímo z prohlížeče přes fetch, bez vlastních hlaviček.
 * - Skládání parametrů přes URLSearchParams s field[] políčky.
 */

export const KNIHOVNY_API_FIELDS = [
  'id',
  'title',
  'authors',
  'publishers',
  'placesOfPublication',
  'publicationDates',
  'physicalDescriptions',
  'isbns',
  'issns',
  'cnb',
  'formats'
]

export const ALLOWED_SEARCH_TYPES = [
  'ISN',
  'Title',
  'Author',
  'AllFields',
  'adv_search_nbn'
]

/**
 * Převod ISBN na 13 číslic bez pomlček.
 * Pokud je předáno 10místné ISBN (např. ISBN-10), převede ho na 978 + vypočítá novou kontrolní číslici EAN-13.
 */
export function normalizeIsbn(isbnStr) {
  if (!isbnStr) return ''

  // Odstranění zbytků v závorce, např. "80-202-0468-7 (brož.)" -> "80-202-0468-7"
  const cleanStr = String(isbnStr).split('(')[0].trim()

  // Ponechat pouze číslice a případně 'X'/'x'
  const raw = cleanStr.replace(/[^0-9Xx]/g, '')

  if (raw.length === 10) {
    // Převod ISBN-10 na ISBN-13 (978 + prvních 9 číslic + nový check digit)
    const base = '978' + raw.substring(0, 9)
    let sum = 0
    for (let i = 0; i < 12; i++) {
      const digit = parseInt(base[i], 10)
      sum += i % 2 === 0 ? digit * 1 : digit * 3
    }
    const checkDigit = (10 - (sum % 10)) % 10
    return base + checkDigit
  }

  if (raw.length === 13) {
    return raw
  }

  return raw
}

/**
 * Oříznutí katalogizačních letopočtů u jména autora.
 * Tvar: "Jméno Příjmení, roky" -> "Jméno Příjmení"
 * Např.: "Jean de Nostredame, asi 1507-1577" -> "Jean de Nostredame"
 *        "Josef Prokop, 1971-" -> "Josef Prokop"
 */
export function stripAuthorYears(authorName) {
  if (!authorName) return ''

  let cleaned = String(authorName)
    .replace(/,?\s*(?:asi\s*|ca\.?\s*|\(?)\s*\d{3,4}\s*[-–—]?\s*\d{0,4}\)?\s*$/i, '')
    .trim()

  cleaned = cleaned.replace(/,\s*$/, '').trim()
  return cleaned
}

/**
 * Oříznutí katalogizační interpunkce na konci textů (titul, nakladatel, místo vydání).
 * Např.: "Argo," -> "Argo"
 *        "Praha :" -> "Praha"
 *        "[Praha] :" -> "Praha"
 */
export function cleanCatalogPunctuation(str) {
  if (!str) return ''

  let cleaned = String(str).trim()

  // Opakovaně odstraňovat koncovou katalogizační interpunkci a mezery
  while (/[,\:\/\;\=\s]$/.test(cleaned)) {
    cleaned = cleaned.replace(/[,\:\/\;\=\s]+$/, '').trim()
  }

  // Oříznutí vnějších hranatých závorek
  if (cleaned.startsWith('[') && cleaned.endsWith(']')) {
    cleaned = cleaned.slice(1, -1).trim()
  } else if (cleaned.startsWith('[')) {
    cleaned = cleaned.slice(1).trim()
  } else if (cleaned.endsWith(']')) {
    cleaned = cleaned.slice(0, -1).trim()
  }

  while (/[,\:\/\;\=\s]$/.test(cleaned)) {
    cleaned = cleaned.replace(/[,\:\/\;\=\s]+$/, '').trim()
  }

  return cleaned
}

/**
 * Vytáhnutí 4místného roku z pole publicationDates pomocí regexu \d{4}.
 */
export function extractYear(publicationDates) {
  if (!publicationDates) return ''
  const datesStr = Array.isArray(publicationDates) ? publicationDates.join(' ') : String(publicationDates)
  const match = datesStr.match(/\d{4}/)
  return match ? match[0] : ''
}

/**
 * Zpracování objektu autorů z API katalogu Knihovny.cz.
 */
export function parseAuthors(authorsObj) {
  if (!authorsObj || typeof authorsObj !== 'object') {
    return { primary: [], secondary: [], corporate: [], primaryDisplay: '' }
  }

  const parseKeys = (group) => {
    if (!group) return []
    if (Array.isArray(group)) return group.map(stripAuthorYears).filter(Boolean)
    if (typeof group === 'object') {
      return Object.keys(group).map(stripAuthorYears).filter(Boolean)
    }
    return []
  }

  const primary = parseKeys(authorsObj.primary)
  const secondary = parseKeys(authorsObj.secondary)
  const corporate = parseKeys(authorsObj.corporate)

  const primaryDisplay = primary.join(', ') || corporate.join(', ') || secondary.join(', ') || 'Neznámý autor'

  return { primary, secondary, corporate, primaryDisplay }
}

/**
 * Naformátování jednoho záznamu z API do standardního objektu knihy.
 */
export function parseKnihovnyRecord(record) {
  if (!record) return null

  const authorsInfo = parseAuthors(record.authors)
  const rawIsbns = Array.isArray(record.isbns) ? record.isbns : []
  const normalizedIsbns = rawIsbns.map(normalizeIsbn).filter(Boolean)

  const title = cleanCatalogPunctuation(record.title ?? '')
  const publisher = cleanCatalogPunctuation(record.publishers?.[0] ?? '')
  const placeOfPublication = cleanCatalogPunctuation(record.placesOfPublication?.[0] ?? '')
  const publicationYear = extractYear(record.publicationDates)
  const pages = record.physicalDescriptions?.[0] ?? ''
  const cnb = record.cnb ?? ''
  const formats = Array.isArray(record.formats) ? record.formats : []
  const isBook = formats.length === 0 || formats.some((f) => f.includes('0/BOOKS/'))

  return {
    id: record.id ?? '',
    title: title || 'Bez názvu',
    author: authorsInfo.primaryDisplay,
    authors: authorsInfo,
    publisher,
    placeOfPublication,
    publicationDate: publicationYear,
    publicationYear,
    pages,
    description: pages ? `Fyzický popis: ${pages}` : '',
    isbns: normalizedIsbns,
    rawIsbns,
    issns: Array.isArray(record.issns) ? record.issns : [],
    cnb,
    formats,
    isBook,
    rawRecord: record
  }
}

/**
 * Volání veřejného API katalogu Knihovny.cz
 *
 * @param {Object} options
 * @param {string} options.lookfor Hledaný text nebo číslo
 * @param {string} options.type ISN | Title | Author | AllFields | adv_search_nbn
 * @param {number} options.limit Počet záznamů (0-100, výchozí 10)
 * @param {number} options.timeoutMs Časový limit v ms (výchozí 8000 ms)
 * @param {Function} options.fetchFn Použitá fetch funkce
 */
export async function searchKnihovnyApi({
  lookfor,
  type = 'ISN',
  limit = 10,
  timeoutMs = 8000,
  fetchFn = typeof fetch !== 'undefined' ? fetch : null
} = {}) {
  if (!lookfor || !String(lookfor).trim()) {
    return { status: 'OK', resultCount: 0, records: [], matchedRecord: null }
  }

  if (!ALLOWED_SEARCH_TYPES.includes(type)) {
    throw new Error(`Neplatný typ vyhledávání "${type}". Povolené typy: ${ALLOWED_SEARCH_TYPES.join(', ')}`)
  }

  const cleanQuery = String(lookfor).trim()
  const searchLimit = Math.min(Math.max(0, parseInt(limit, 10) || 10), 100)

  let searchLookfor = cleanQuery
  let searchedIsbn13 = null

  if (type === 'ISN') {
    searchedIsbn13 = normalizeIsbn(cleanQuery)
    searchLookfor = searchedIsbn13 || cleanQuery
  }

  const params = new URLSearchParams({
    lookfor: searchLookfor,
    type,
    limit: String(searchLimit)
  })

  for (const field of KNIHOVNY_API_FIELDS) {
    params.append('field[]', field)
  }

  const url = `https://www.knihovny.cz/api/v1/search?${params.toString()}`

  if (!fetchFn) {
    throw new Error('Prostředí neobsahuje rozhraní fetch.')
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetchFn(url, {
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`HTTP chyba ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    const rawRecords = data.records ?? []

    const parsedRecords = rawRecords.map(parseKnihovnyRecord).filter(Boolean)

    if (type === 'ISN' && searchedIsbn13) {
      // Vyber záznam, jehož pole isbns hledané číslo opravdu obsahuje (po převodu na 13 číslic)
      const matched = parsedRecords.find((rec) =>
        rec.isbns.some((isbn) => isbn === searchedIsbn13)
      )

      return {
        status: data.status ?? 'OK',
        resultCount: matched ? 1 : 0,
        records: matched ? [matched] : [],
        matchedRecord: matched ?? null
      }
    }

    if (type === 'Title') {
      // Hledání podle názvu vrací i audioknihy a CD – knihy mají ve formats "0/BOOKS/"
      const bookRecords = parsedRecords.filter((rec) => rec.isBook)
      return {
        status: data.status ?? 'OK',
        resultCount: bookRecords.length,
        records: bookRecords,
        matchedRecord: bookRecords[0] ?? null
      }
    }

    return {
      status: data.status ?? 'OK',
      resultCount: parsedRecords.length,
      records: parsedRecords,
      matchedRecord: parsedRecords[0] ?? null
    }
  } catch (err) {
    clearTimeout(timeoutId)
    if (err.name === 'AbortError') {
      throw new Error('Požadavek na katalog Knihovny.cz vypršel (časový limit 8 s).')
    }
    throw err
  }
}
