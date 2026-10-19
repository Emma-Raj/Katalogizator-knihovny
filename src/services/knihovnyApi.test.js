import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import {
  normalizeIsbnTo13,
  cleanCatalogText,
  cleanAuthorName,
  extractPublicationYear,
  searchBookByIsbn,
  REQUIRED_KNIHOVNY_FIELDS
} from './knihovnyApi.js'

describe('Knihovny.cz API Utility Functions', () => {
  describe('normalizeIsbnTo13', () => {
    test('zachová platné 13místné ISBN bez pomlček', () => {
      assert.equal(normalizeIsbnTo13('9788025703670'), '9788025703670')
    })

    test('odstraní pomlčky z 13místného ISBN', () => {
      assert.equal(normalizeIsbnTo13('978-80-257-0367-0'), '9788025703670')
    })

    test('převede 10místné ISBN na 13místné s předponou 978 a správným kontrolním číslem', () => {
      // 80-202-0468-7 -> 9788020204684
      assert.equal(normalizeIsbnTo13('80-202-0468-7'), '9788020204684')
    })

    test('odstraní poznámku v závorce za ISBN', () => {
      assert.equal(normalizeIsbnTo13('80-202-0468-7 (brož.)'), '9788020204684')
      assert.equal(normalizeIsbnTo13('978-80-257-0367-0 (váz.)'), '9788025703670')
    })

    test('vrátí prázdný řetězec pro neplatný vstup', () => {
      assert.equal(normalizeIsbnTo13('abc'), '')
      assert.equal(normalizeIsbnTo13(''), '')
      assert.equal(normalizeIsbnTo13(null), '')
    })
  })

  describe('cleanCatalogText', () => {
    test('ořízne koncovou katalogizační interpunkci', () => {
      assert.equal(cleanCatalogText('Argo,'), 'Argo')
      assert.equal(cleanCatalogText('Praha :'), 'Praha')
      assert.equal(cleanCatalogText('[Praha] :'), 'Praha')
      assert.equal(cleanCatalogText('Praha ;'), 'Praha')
    })
  })

  describe('cleanAuthorName', () => {
    test('odstraní roky a datace na konci jména autora', () => {
      assert.equal(cleanAuthorName('Jean de Nostredame, asi 1507-1577'), 'Jean de Nostredame')
      assert.equal(cleanAuthorName('Josef Prokop, 1971-'), 'Josef Prokop')
      assert.equal(cleanAuthorName('Vojtěch Domlátil, 1979-'), 'Vojtěch Domlátil')
      assert.equal(cleanAuthorName('Karel Čapek, 1890-1938'), 'Karel Čapek')
    })
  })

  describe('extractPublicationYear', () => {
    test('vytáhne 4místný rok z různých tvarů', () => {
      assert.equal(extractPublicationYear(['2011']), '2011')
      assert.equal(extractPublicationYear(['c2010']), '2010')
      assert.equal(extractPublicationYear(['[2025]']), '2025')
      assert.equal(extractPublicationYear(null), '')
    })
  })

  describe('searchBookByIsbn', () => {
    const sampleApiResponse = {
      resultCount: 1,
      records: [{
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
      }],
      status: 'OK'
    }

    test('při úspěšném vyhledání správně naparsuje ukázková data z API', async () => {
      let requestedUrl = ''

      const mockFetch = async (url) => {
        requestedUrl = url
        return {
          ok: true,
          status: 200,
          json: async () => sampleApiResponse
        }
      }

      const res = await searchBookByIsbn('978-80-257-0367-0', { fetchFn: mockFetch })

      assert.equal(res.success, true)
      assert.ok(res.book)

      // Kontrola sestavené URL
      const urlObj = new URL(requestedUrl)
      assert.equal(urlObj.origin + urlObj.pathname, 'https://www.knihovny.cz/api/v1/search')
      assert.equal(urlObj.searchParams.get('lookfor'), '9788025703670')
      assert.equal(urlObj.searchParams.get('type'), 'ISN')
      assert.equal(urlObj.searchParams.get('limit'), '10')

      // Kontrola, že URL obsahuje všechna povinná pole v field[]
      const fieldsInUrl = urlObj.searchParams.getAll('field[]')
      for (const field of REQUIRED_KNIHOVNY_FIELDS) {
        assert.ok(fieldsInUrl.includes(field), `Pole ${field} chybí v URL params`)
      }

      // Kontrola naparsovaných údajů o knize
      assert.equal(res.book.id, 'mkp.3521868')
      assert.equal(res.book.title, 'Životy slavných a starých provensálských básníků, kteří žili v dobách hrabat z kraje Provença')
      assert.equal(res.book.author, 'Jean de Nostredame')
      assert.equal(res.book.publisher, 'Argo')
      assert.equal(res.book.publicationPlace, 'Praha')
      assert.equal(res.book.publicationYear, '2011')
      assert.equal(res.book.physicalDescription, '218 s. : il. ; 22 cm')
      assert.equal(res.book.isbn, '9788025703670')
      assert.equal(res.book.cnb, 'cnb002163342')
    })

    test('zvládne odpověď bez záznamů (resultCount = 0)', async () => {
      const mockFetch = async () => ({
        ok: true,
        status: 200,
        json: async () => ({ resultCount: 0, status: 'OK' })
      })

      const res = await searchBookByIsbn('9788025703670', { fetchFn: mockFetch })
      assert.equal(res.success, false)
      assert.match(res.error, /nebyla v katalogu Knihovny\.cz nalezena/)
    })

    test('vyfiltruje záznam, pokud žádný v isbns nesouhlasí', async () => {
      const responseWithOtherIsbn = {
        resultCount: 1,
        records: [{
          id: 'mkp.123',
          title: 'Iné vydanie',
          authors: { primary: { 'Autor': [] } },
          isbns: ['978-80-00-00000-0']
        }],
        status: 'OK'
      }

      const mockFetch = async () => ({
        ok: true,
        status: 200,
        json: async () => responseWithOtherIsbn
      })

      const res = await searchBookByIsbn('9788025703670', { fetchFn: mockFetch })
      assert.equal(res.success, false)
      assert.match(res.error, /nebyla v navrácených záznamcích nalezena/)
    })
  })
})
