import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  normalizeIsbn,
  stripAuthorYears,
  cleanCatalogPunctuation,
  extractYear,
  parseKnihovnyRecord,
  searchKnihovnyApi,
  ALLOWED_SEARCH_TYPES,
  KNIHOVNY_API_FIELDS
} from './knihovnyApi.js'

const SAMPLE_API_RESPONSE = {
  resultCount: 1,
  records: [
    {
      id: 'mkp.3521868',
      title: 'Životy slavných a starých provensálských básníků, kteří žili v dobách hrabat z kraje Provença',
      authors: {
        primary: { 'Jean de Nostredame, asi 1507-1577': [] },
        secondary: { 'Josef Prokop, 1971-': [], 'Vojtěch Domlátil, 1979-': [] },
        corporate: []
      },
      publishers: ['Argo,'],
      placesOfPublication: ['Praha :'],
      publicationDates: ['2011'],
      physicalDescriptions: ['218 s. : il. ; 22 cm'],
      isbns: ['978-80-257-0367-0'],
      issns: [],
      cnb: 'cnb002163342',
      formats: ['0/BOOKS/']
    }
  ],
  status: 'OK'
}

describe('Knihovny.cz API - Pomocné funkce', () => {
  describe('normalizeIsbn', () => {
    it('odstraní pomlčky z 13místného ISBN', () => {
      assert.equal(normalizeIsbn('978-80-257-0367-0'), '9788025703670')
    })

    it('převede 10místné ISBN na 13místné s 978 a správnou kontrolní číslicí', () => {
      assert.equal(normalizeIsbn('80-257-0367-0'), '9788025703670')
      assert.equal(normalizeIsbn('8025703670'), '9788025703670')
    })

    it('odstraní poznámku v závorce u ISBN', () => {
      assert.equal(normalizeIsbn('978-80-257-0367-0 (brož.)'), '9788025703670')
    })

    it('vrátí prázdný řetězec pro prázdný vstup', () => {
      assert.equal(normalizeIsbn(''), '')
      assert.equal(normalizeIsbn(null), '')
    })
  })

  describe('stripAuthorYears', () => {
    it('odstraní letopočet narození i úmrtí na konci jména', () => {
      assert.equal(stripAuthorYears('Jean de Nostredame, asi 1507-1577'), 'Jean de Nostredame')
      assert.equal(stripAuthorYears('Josef Prokop, 1971-'), 'Josef Prokop')
      assert.equal(stripAuthorYears('Vojtěch Domlátil, 1979-'), 'Vojtěch Domlátil')
      assert.equal(stripAuthorYears('Jan Amos Komenský, 1592-1670'), 'Jan Amos Komenský')
    })

    it('ponechá jméno bez letopočtu netknuté', () => {
      assert.equal(stripAuthorYears('Karel Čapek'), 'Karel Čapek')
    })
  })

  describe('cleanCatalogPunctuation', () => {
    it('ořízne koncovou interpunkci a mezery', () => {
      assert.equal(cleanCatalogPunctuation('Argo,'), 'Argo')
      assert.equal(cleanCatalogPunctuation('Praha :'), 'Praha')
      assert.equal(cleanCatalogPunctuation('[Praha] :'), 'Praha')
      assert.equal(cleanCatalogPunctuation('Praha /'), 'Praha')
    })
  })

  describe('extractYear', () => {
    it('vytáhne 4místný rok z různých tvarů publicationDates', () => {
      assert.equal(extractYear(['2011']), '2011')
      assert.equal(extractYear(['c2010']), '2010')
      assert.equal(extractYear(['[2025]']), '2025')
      assert.equal(extractYear([]), '')
    })
  })

  describe('parseKnihovnyRecord', () => {
    it('správně naformátuje záznam podle ukázkové odpovědi API', () => {
      const rawRecord = SAMPLE_API_RESPONSE.records[0]
      const parsed = parseKnihovnyRecord(rawRecord)

      assert.equal(parsed.id, 'mkp.3521868')
      assert.equal(parsed.title, 'Životy slavných a starých provensálských básníků, kteří žili v dobách hrabat z kraje Provença')
      assert.equal(parsed.author, 'Jean de Nostredame')
      assert.equal(parsed.publisher, 'Argo')
      assert.equal(parsed.placeOfPublication, 'Praha')
      assert.equal(parsed.publicationDate, '2011')
      assert.equal(parsed.pages, '218 s. : il. ; 22 cm')
      assert.equal(parsed.cnb, 'cnb002163342')
      assert.deepEqual(parsed.isbns, ['9788025703670'])
      assert.equal(parsed.isBook, true)
    })
  })
})

describe('Knihovny.cz API - searchKnihovnyApi integration', () => {
  it('správně složí URL a zavolá fetch bez vlastních hlaviček s field[] parametry', async () => {
    let calledUrl = ''
    let calledOptions = null

    const mockFetch = async (url, options) => {
      calledUrl = url
      calledOptions = options
      return {
        ok: true,
        json: async () => SAMPLE_API_RESPONSE
      }
    }

    const res = await searchKnihovnyApi({
      lookfor: '978-80-257-0367-0',
      type: 'ISN',
      fetchFn: mockFetch
    })

    assert.equal(res.resultCount, 1)
    assert.ok(res.matchedRecord)
    assert.equal(res.matchedRecord.title, 'Životy slavných a starých provensálských básníků, kteří žili v dobách hrabat z kraje Provença')

    // Kontrola složení URL s URLSearchParams
    const urlObj = new URL(calledUrl)
    assert.equal(urlObj.origin + urlObj.pathname, 'https://www.knihovny.cz/api/v1/search')
    assert.equal(urlObj.searchParams.get('lookfor'), '9788025703670')
    assert.equal(urlObj.searchParams.get('type'), 'ISN')
    assert.equal(urlObj.searchParams.get('limit'), '10')

    const fields = urlObj.searchParams.getAll('field[]')
    for (const field of KNIHOVNY_API_FIELDS) {
      assert.ok(fields.includes(field), `Chybí pole field[]=${field}`)
    }
  })

  it('vrátí resultCount: 0 a matchedRecord: null, pokud žádný z 10 záznamů neobsahuje hledané 13místné ISBN', async () => {
    const mockFetch = async () => ({
      ok: true,
      json: async () => SAMPLE_API_RESPONSE
    })

    const res = await searchKnihovnyApi({
      lookfor: '978-80-000-0000-0', // Jiné ISBN
      type: 'ISN',
      fetchFn: mockFetch
    })

    assert.equal(res.resultCount, 0)
    assert.equal(res.matchedRecord, null)
  })

  it('zvládne odpoveď bez klíče records (0 výsledků)', async () => {
    const mockFetch = async () => ({
      ok: true,
      json: async () => ({ resultCount: 0, status: 'OK' })
    })

    const res = await searchKnihovnyApi({
      lookfor: 'NeexistujícíKniha123456',
      type: 'Title',
      fetchFn: mockFetch
    })

    assert.equal(res.resultCount, 0)
    assert.deepEqual(res.records, [])
    assert.equal(res.matchedRecord, null)
  })

  it('vyhodí chybovou hlášku při neplatném typu vyhledávání', async () => {
    await assert.rejects(
      async () => {
        await searchKnihovnyApi({
          lookfor: 'test',
          type: 'InvalidType',
          fetchFn: async () => {}
        })
      },
      (err) => {
        return err.message.includes('Neplatný typ vyhledávání')
      }
    )
  })
})
