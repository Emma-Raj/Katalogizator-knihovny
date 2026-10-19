/**
 * Knihovny.cz API Service
 * Služba pro vyhledávání knih podle ISBN v české Národní knihovně / Knihovny.cz
 */

/**
 * Převede ISBN (10místné nebo 13místné, případně s pomlčkami a poznámkami)
 * na čistých 13 číslic.
 * ISBN-10 se převede na ISBN-13 (předřazení 978 a přepočet kontrolní číslice).
 *
 * @param {string} input - Vstupní řetězec ISBN
 * @returns {string} - 13místné ISBN bez pomlček, nebo prázdný řetězec při neplatném vstupu
 */
export function normalizeIsbnTo13(input) {
  if (!input || typeof input !== 'string') return ''

  // Extrahujeme první souvislou sekvenci číslic / X z textu (např. "80-202-0468-7 (brož.)" -> "8020204687")
  // Odstraníme pomlčky, mezery a poznámky v závorkách
  const cleaned = input.split('(')[0].replace(/[^0-9Xx]/g, '').toUpperCase()

  // Pokud má po vyčištění 13 číslic, vrátíme je
  if (cleaned.length === 13 && /^\d{13}$/.test(cleaned)) {
    return cleaned
  }

  // Pokud má po vyčištění 10 znaků (ISBN-10)
  if (cleaned.length === 10 && /^\d{9}[0-9X]$/.test(cleaned)) {
    const first9 = cleaned.substring(0, 9)
    const prefix12 = '978' + first9

    // Výpočet kontrolní číslice pro ISBN-13 (váhy střídavě 1 a 3)
    let sum = 0
    for (let i = 0; i < 12; i++) {
      const digit = parseInt(prefix12[i], 10)
      sum += (i % 2 === 0) ? digit : digit * 3
    }
    const checkDigit = (10 - (sum % 10)) % 10

    return prefix12 + checkDigit.toString()
  }

  // Pokud řetězec obsahuje 13 souvislých číslic někde uvnitř
  const match13 = input.match(/\d{13}/)
  if (match13) {
    return match13[0]
  }

  // Pokud obsahuje 10 znaků ISBN s pomlčkami
  const digitsOnly = input.replace(/[^0-9Xx]/g, '')
  if (digitsOnly.length >= 13) {
    return digitsOnly.substring(0, 13)
  }

  return ''
}

/**
 * Odstraní katalogizační interpunkci na konci textu
 * (např. "Argo," -> "Argo", "Praha :" -> "Praha", "[Praha] :" -> "Praha")
 *
 * @param {string} text
 * @returns {string}
 */
export function cleanCatalogText(text) {
  if (!text || typeof text !== 'string') return ''

  let result = text.trim()

  // Odstraníme koncovou katalogizační interpunkci (, : / ; .)
  result = result.replace(/[\s,:/;.]+$|^\[|\]$/g, '').trim()

  // Odstraníme hranaté závorky na začátku a konci, např. "[Praha]" -> "Praha"
  if (result.startsWith('[') && result.endsWith(']')) {
    result = result.substring(1, result.length - 1).trim()
  }

  // Ještě jednou ořízneme koncovou interpunkci znova
  result = result.replace(/[\s,:/;.]+$|^\[|\]$/g, '').trim()

  return result
}

/**
 * Očistí jméno autora od roku narození/úmrtí a katalogizačních poznámek
 * (např. "Jean de Nostredame, asi 1507-1577" -> "Jean de Nostredame",
 *  "Josef Prokop, 1971-" -> "Josef Prokop")
 *
 * @param {string} rawName
 * @returns {string}
 */
export function cleanAuthorName(rawName) {
  if (!rawName || typeof rawName !== 'string') return ''

  let name = rawName.trim()

  // Odstranění letopočtů na konci (např. ", asi 1507-1577", ", 1971-", ", 1890-1938")
  name = name.replace(/,\s*(?:asi\s*)?\d{3,4}(?:\s*-\s*\d{0,4})?\??\s*$/i, '')
  name = name.replace(/,\s*[\d\s\-asi\?]+$/i, '')

  return cleanCatalogText(name)
}

/**
 * Vytáhne 4místný rok z pole publicationDates nebo řetězce
 * (např. ["2011"] -> "2011", "c2010" -> "2010", "[2025]" -> "2025")
 *
 * @param {Array|string} publicationDates
 * @returns {string}
 */
export function extractPublicationYear(publicationDates) {
  if (!publicationDates) return ''

  const str = Array.isArray(publicationDates) ? publicationDates.join(' ') : String(publicationDates)
  const match = str.match(/\d{4}/)

  return match ? match[0] : ''
}

/**
 * Pole, o která si v API Knihovny.cz říkáme
 */
export const REQUIRED_KNIHOVNY_FIELDS = [
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

/**
 * Vyhledá knihu podle ISBN v katalogu Knihovny.cz
 *
 * @param {string} rawIsbn - ISBN vložené uživatelem (10 nebo 13 místné)
 * @param {Object} [options] - Možnosti (fetchFn, timeout)
 * @returns {Promise<{success: boolean, book?: Object, error?: string}>}
 */
export async function searchBookByIsbn(rawIsbn, options = {}) {
  const normalizedIsbn = normalizeIsbnTo13(rawIsbn)

  if (!normalizedIsbn) {
    return {
      success: false,
      error: 'Zadané číslo není platné 10místné ani 13místné ISBN.'
    }
  }

  // Sestavení URL přes URLSearchParams podle přesných požadavků
  const params = new URLSearchParams({
    lookfor: normalizedIsbn,
    type: 'ISN',
    limit: '10'
  })

  for (const field of REQUIRED_KNIHOVNY_FIELDS) {
    params.append('field[]', field)
  }

  const apiUrl = 'https://www.knihovny.cz/api/v1/search?' + params.toString()

  const fetchFn = options.fetchFn || fetch
  const timeoutMs = options.timeout ?? 8000

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetchFn(apiUrl, {
      signal: controller.signal
    })
    clearTimeout(timeoutId)

    if (!response.ok) {
      return {
        success: false,
        error: `Katalog Knihovny.cz vrátil chybu (HTTP ${response.status}).`
      }
    }

    const data = await response.json()
    const records = data.records ?? []

    if (!Array.isArray(records) || records.length === 0) {
      return {
        success: false,
        error: `Kniha s ISBN ${normalizedIsbn} nebyla v katalogu Knihovny.cz nalezena.`
      }
    }

    // Vybereme záznam, jehož pole isbns hledané číslo po převodu na 13 číslic opravdu obsahuje
    const matchedRecord = records.find((record) => {
      if (!Array.isArray(record.isbns)) return false
      return record.isbns.some((isbnEntry) => normalizeIsbnTo13(isbnEntry) === normalizedIsbn)
    })

    if (!matchedRecord) {
      return {
        success: false,
        error: `Kniha s ISBN ${normalizedIsbn} nebyla v navrácených záznamcích nalezena.`
      }
    }

    // Zpracování autorů (primary -> secondary -> corporate)
    const primaryAuthors = Object.keys(matchedRecord.authors?.primary ?? {})
    const secondaryAuthors = Object.keys(matchedRecord.authors?.secondary ?? {})
    const corporateAuthors = Object.keys(matchedRecord.authors?.corporate ?? {})

    let authorRaw = primaryAuthors[0] || secondaryAuthors[0] || corporateAuthors[0] || ''
    if (primaryAuthors.length > 1) {
      authorRaw = primaryAuthors.join(', ')
    }

    const author = cleanAuthorName(authorRaw) || 'Neznámý autor'
    const title = cleanCatalogText(matchedRecord.title ?? '') || 'Bez názvu'
    const publisher = cleanCatalogText(matchedRecord.publishers?.[0] ?? '')
    const place = cleanCatalogText(matchedRecord.placesOfPublication?.[0] ?? '')
    const year = extractPublicationYear(matchedRecord.publicationDates)
    const physicalDesc = matchedRecord.physicalDescriptions?.[0] ?? ''

    return {
      success: true,
      book: {
        id: matchedRecord.id,
        title,
        author,
        publisher,
        publicationPlace: place,
        publicationYear: year,
        physicalDescription: physicalDesc,
        isbn: normalizedIsbn,
        rawIsbns: matchedRecord.isbns ?? [],
        cnb: matchedRecord.cnb ?? null,
        formats: matchedRecord.formats ?? []
      }
    }
  } catch (err) {
    clearTimeout(timeoutId)
    if (err.name === 'AbortError') {
      return {
        success: false,
        error: 'Vypršel časový limit pro dotaz na katalog Knihovny.cz (8 s).'
      }
    }
    return {
      success: false,
      error: `Chyba při komunikaci s katalogem: ${err.message}`
    }
  }
}
