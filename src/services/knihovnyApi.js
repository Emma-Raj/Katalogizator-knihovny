/**
 * Služba pro vyhledávání knih v databázi Knihovny.cz podle ISBN/čárkového kódu.
 * Používá veřejné API: https://www.knihovny.cz/api/v1/search?lookfor=<ISBN>&type=ISN
 */

export async function searchKnihovnyCz(isbn) {
  if (!isbn || typeof isbn !== 'string') {
    return {
      found: false,
      message: 'Nebyl zadán platný kód ISBN.',
    }
  }

  const cleanIsbn = isbn.trim().replace(/[-\s]/g, '')
  if (!cleanIsbn) {
    return {
      found: false,
      message: 'Zadaný čárkový kód / ISBN je prázdný.',
    }
  }

  const url = `https://www.knihovny.cz/api/v1/search?lookfor=${encodeURIComponent(cleanIsbn)}&type=ISN`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      return {
        found: false,
        message: `Chyba při komunikaci s Knihovny.cz (HTTP ${response.status}).`,
      }
    }

    const data = await response.json()

    if (data && data.resultCount > 0 && Array.isArray(data.records) && data.records.length > 0) {
      const record = data.records[0]

      // 1. Název knihy
      let title = record.title || record.shortTitle || 'Neznámý název'
      // Odstranění koncových oddělovačů jako "/" nebo ":"
      title = title.replace(/\s*[/:]\s*$/, '').trim()

      // 2. Autor knihy
      let author = record.primaryAuthor || ''

      if (!author && record.authors) {
        if (record.authors.primary && typeof record.authors.primary === 'object') {
          const primaryKeys = Object.keys(record.authors.primary)
          if (primaryKeys.length > 0) author = primaryKeys[0]
        } else if (record.authors.main && typeof record.authors.main === 'object') {
          const mainKeys = Object.keys(record.authors.main)
          if (mainKeys.length > 0) author = mainKeys[0]
        }
      }

      if (author) {
        // Odstranění letopočtů narození/Úmrtí (např. ", 1890-1938")
        author = author.replace(/,\s*\d{4}(-\d{0,4})?/g, '').trim()

        // Převedení z tvaru "Příjmení, Jméno" na "Jméno Příjmení"
        if (author.includes(',')) {
          const parts = author.split(',').map((p) => p.trim())
          if (parts.length === 2 && parts[0] && parts[1]) {
            author = `${parts[1]} ${parts[0]}`
          }
        }
      } else {
        author = 'Neznámý autor'
      }

      // 3. Rok vydání
      let year = ''
      if (Array.isArray(record.publicationDates) && record.publicationDates.length > 0) {
        year = String(record.publicationDates[0])
      } else if (Array.isArray(record.publishDate) && record.publishDate.length > 0) {
        year = String(record.publishDate[0])
      } else if (record.year) {
        year = String(record.year)
      }

      const yearMatch = year.match(/\b\d{4}\b/)
      year = yearMatch ? yearMatch[0] : (year || 'Neuvedeno')

      return {
        found: true,
        title,
        author,
        year,
        isbn: cleanIsbn,
        rawRecord: record,
      }
    }

    return {
      found: false,
      message: 'Kniha nebyla v databázi Knihovny.cz nalezena.',
    }
  } catch (err) {
    console.error('Chyba při vyhledávání na Knihovny.cz:', err)
    return {
      found: false,
      error: err.message,
      message: 'Nepodařilo se připojit k rozhraní Knihovny.cz.',
    }
  }
}
