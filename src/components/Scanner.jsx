import React, { useState, useEffect, useRef } from 'react'
import {
  Camera,
  Upload,
  Search,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  History,
  Trash2,
  BookOpen,
  ArrowRight,
  MapPin,
  ScanLine,
  PlusCircle,
  ExternalLink,
  Globe,
  Tag,
  Calendar,
  Building,
  FileText
} from 'lucide-react'
import { Html5Qrcode } from 'html5-qrcode'
import { searchKnihovnyApi, normalizeIsbn, ALLOWED_SEARCH_TYPES } from '../services/knihovnyApi'

export default function Scanner({
  onScanSuccess,
  books = [],
  scanHistory = [],
  onClearHistory,
  onRemoveHistoryItem,
  onSelectBook,
  onAddBook
}) {
  const [activeSubTab, setActiveSubTab] = useState('scan') // 'scan' | 'history'
  const [cameraActive, setCameraActive] = useState(false)
  const [isSearchingApi, setIsSearchingApi] = useState(false)
  const [searchStatus, setSearchStatus] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [manualQuery, setManualQuery] = useState('')
  const [searchType, setSearchType] = useState('ISN') // 'ISN' | 'Title' | 'Author' | 'AllFields' | 'adv_search_nbn'
  const [apiResult, setApiResult] = useState(null)
  const [lastRecognizedBook, setLastRecognizedBook] = useState(null)
  const [importedMessage, setImportedMessage] = useState('')

  const html5QrcodeRef = useRef(null)

  // Clean up scanner on unmount or tab switch
  useEffect(() => {
    return () => {
      stopCameraScanner()
    }
  }, [])

  const stopCameraScanner = async () => {
    if (html5QrcodeRef.current) {
      try {
        if (html5QrcodeRef.current.isScanning) {
          await html5QrcodeRef.current.stop()
        }
        html5QrcodeRef.current.clear()
      } catch (err) {
        console.error('Chyba při zastavování skeneru:', err)
      }
      html5QrcodeRef.current = null
    }
    setCameraActive(false)
  }

  const startCameraScanner = async () => {
    setErrorMessage('')
    setApiResult(null)
    setLastRecognizedBook(null)

    // First make sure the container element <div id="qr-reader" /> is mounted in DOM
    setCameraActive(true)

    // Wait 100ms for React DOM to render <div id="qr-reader" />
    await new Promise((res) => setTimeout(res, 100))

    try {
      if (html5QrcodeRef.current) {
        await stopCameraScanner()
        setCameraActive(true)
        await new Promise((res) => setTimeout(res, 100))
      }

      const qrElement = document.getElementById('qr-reader')
      if (!qrElement) {
        throw new Error('Element pro skener kódů se neporadilo načíst v DOM.')
      }

      const html5Qrcode = new Html5Qrcode('qr-reader')
      html5QrcodeRef.current = html5Qrcode

      const config = {
        fps: 10,
        qrbox: { width: 280, height: 160 },
        aspectRatio: 1.333
      }

      const onScanSuccessCallback = async (decodedText) => {
        await stopCameraScanner()
        handleQuerySearch(decodedText, 'ISN')
      }

      // Multi-tier camera fallback strategy
      let cameraStarted = false

      // Tier 1: Try getCameras() to select back camera or first available camera
      try {
        const cameras = await Html5Qrcode.getCameras()
        if (cameras && cameras.length > 0) {
          // Look for back camera
          const backCamera = cameras.find(
            (c) =>
              c.label.toLowerCase().includes('back') ||
              c.label.toLowerCase().includes('rear') ||
              c.label.toLowerCase().includes('zadní') ||
              c.label.toLowerCase().includes('prostranství')
          )
          const selectedCamId = backCamera ? backCamera.id : cameras[0].id

          await html5Qrcode.start(selectedCamId, config, onScanSuccessCallback, () => {})
          cameraStarted = true
        }
      } catch (camErr) {
        console.warn('getCameras selhalo, zkouším direct facingMode:', camErr)
      }

      // Tier 2: Try facingMode environment (back camera)
      if (!cameraStarted) {
        try {
          await html5Qrcode.start(
            { facingMode: 'environment' },
            config,
            onScanSuccessCallback,
            () => {}
          )
          cameraStarted = true
        } catch (envErr) {
          console.warn('facingMode environment selhalo:', envErr)
        }
      }

      // Tier 3: Fallback to facingMode user (front camera / default)
      if (!cameraStarted) {
        try {
          await html5Qrcode.start(
            { facingMode: 'user' },
            config,
            onScanSuccessCallback,
            () => {}
          )
          cameraStarted = true
        } catch (userErr) {
          console.warn('facingMode user selhalo:', userErr)
        }
      }

      if (!cameraStarted) {
        throw new Error('Zařízení neposkytlo žádný dostupný video stream fotoaparátu.')
      }
    } catch (err) {
      console.error('Spuštění fotoaparátu selhalo:', err)
      await stopCameraScanner()
      if (
        err.name === 'NotAllowedError' ||
        err.name === 'PermissionDeniedError' ||
        (err.message && err.message.toLowerCase().includes('permission'))
      ) {
        setErrorMessage(
          'Přístup k fotoaparátu byl zamítnut. Povolte fotoaparát v nastavení prohlížeče nebo zadejte kód ručně níže.'
        )
      } else {
        setErrorMessage(
          'Fotoaparát se nepodařilo spustit (nebylo nalezeno kompatibilní video zařízení nebo přístup). Můžete knihu vyhledat ručně níže.'
        )
      }
    }
  }

  // Perform search via Knihovny.cz API and match local catalog
  const handleQuerySearch = async (queryText, type = searchType) => {
    if (!queryText || !queryText.trim()) return

    setErrorMessage('')
    setApiResult(null)
    setLastRecognizedBook(null)
    setImportedMessage('')
    setIsSearchingApi(true)

    const cleanQuery = queryText.trim()

    try {
      if (type === 'ISN') {
        setSearchStatus(`Vyhledávání ISBN/EAN "${cleanQuery}" v katalogu Knihovny.cz...`)
      } else if (type === 'Title') {
        setSearchStatus(`Vyhledávání titulu "${cleanQuery}" v katalogu Knihovny.cz...`)
      } else if (type === 'Author') {
        setSearchStatus(`Vyhledávání autora "${cleanQuery}" v katalogu Knihovny.cz...`)
      } else {
        setSearchStatus(`Vyhledávání "${cleanQuery}" v katalogu Knihovny.cz...`)
      }

      // Call Knihovny.cz API service
      const res = await searchKnihovnyApi({
        lookfor: cleanQuery,
        type: type,
        limit: 10
      })

      setIsSearchingApi(false)
      setSearchStatus('')

      if (res.matchedRecord || (res.records && res.records.length > 0)) {
        const foundRecord = res.matchedRecord || res.records[0]
        setApiResult(foundRecord)

        // Check if book exists in local school catalog by ISBN or Title
        const normalizedQueryIsbn = type === 'ISN' ? normalizeIsbn(cleanQuery) : ''
        let localMatch = null

        if (normalizedQueryIsbn) {
          localMatch = books.find((b) => normalizeIsbn(b.barcode) === normalizedQueryIsbn)
        }

        if (!localMatch) {
          const titleLower = foundRecord.title.toLowerCase()
          localMatch = books.find((b) => b.title.toLowerCase() === titleLower)
        }

        if (localMatch) {
          setLastRecognizedBook(localMatch)
          onScanSuccess(localMatch, null)
        } else {
          // Construct book object for display or import
          const catalogBook = {
            id: `book-knihovny-${Date.now()}`,
            title: foundRecord.title,
            author: foundRecord.author,
            genre: 'Ostatní literatura',
            category: 'ostatni',
            categoryName: 'Ostatní doporučená literatura a novinky',
            isMaturita: false,
            barcode: foundRecord.isbns[0] || normalizedQueryIsbn || cleanQuery,
            location: 'Sekce N – Nepřiřazeno (Nová kniha z Knihovny.cz)',
            description: [
              foundRecord.pages ? `Fyzický popis: ${foundRecord.pages}.` : '',
              foundRecord.publisher ? `Nakladatel: ${foundRecord.publisher}` : '',
              foundRecord.placeOfPublication ? `(${foundRecord.placeOfPublication})` : '',
              foundRecord.publicationYear ? `Rok: ${foundRecord.publicationYear}.` : '',
              foundRecord.cnb ? `ČNB: ${foundRecord.cnb}` : ''
            ].filter(Boolean).join(' '),
            isBorrowed: false,
            borrowedTo: '',
            borrowedDate: ''
          }

          setLastRecognizedBook(catalogBook)
          onScanSuccess(catalogBook, null)
        }
      } else {
        // Fallback: check local books database
        const queryLower = cleanQuery.toLowerCase()
        const localBook = books.find(
          (b) =>
            normalizeIsbn(b.barcode) === normalizeIsbn(cleanQuery) ||
            b.title.toLowerCase().includes(queryLower) ||
            b.author.toLowerCase().includes(queryLower)
        )

        if (localBook) {
          setLastRecognizedBook(localBook)
          onScanSuccess(localBook, null)
        } else {
          setErrorMessage(`Kniha odpovídající dotazu "${cleanQuery}" nebyla v katalogu Knihovny.cz ani v lokální databázi nalezena.`)
        }
      }
    } catch (err) {
      console.error('Chyba vyhledávání Knihovny.cz API:', err)
      setIsSearchingApi(false)
      setSearchStatus('')

      // Local fallback in case of network issue
      const queryLower = cleanQuery.toLowerCase()
      const localBook = books.find(
        (b) =>
          normalizeIsbn(b.barcode) === normalizeIsbn(cleanQuery) ||
          b.title.toLowerCase().includes(queryLower) ||
          b.author.toLowerCase().includes(queryLower)
      )

      if (localBook) {
        setLastRecognizedBook(localBook)
        onScanSuccess(localBook, null)
      } else {
        setErrorMessage(
          err.message || 'Nepodařilo se načíst data z katalogu Knihovny.cz. Zkuste to prosím znovu.'
        )
      }
    }
  }

  // Handle Form Manual Search
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!manualQuery.trim()) return
    handleQuerySearch(manualQuery, searchType)
  }

  // Handle Quick Test Sample
  const handleQuickTestIsbn = (isbn, sampleName) => {
    setManualQuery(isbn)
    setSearchType('ISN')
    handleQuerySearch(isbn, 'ISN')
  }

  // Import book from Knihovny.cz API into local catalog
  const handleImportToCatalog = () => {
    if (!lastRecognizedBook || !onAddBook) return

    onAddBook(lastRecognizedBook)
    setImportedMessage(`Kniha "${lastRecognizedBook.title}" byla z Knihovny.cz přidána do lokálního katalogu!`)
  }

  const sampleIsbns = [
    { title: 'Životy slavných básníků (Ukázka API)', isbn: '978-80-257-0367-0' },
    { title: 'Epos o Gilgamešovi', isbn: '859000000101' },
    { title: 'Hamlet (W. Shakespeare)', isbn: '859000000106' },
    { title: '1984 (G. Orwell)', isbn: '859000000171' }
  ]

  return (
    <div className="p-4 space-y-5 max-w-md mx-auto pb-24">

      {/* Navigation Sub-Tabs: Scanner vs History */}
      <div className="flex bg-slate-200/80 p-1 rounded-2xl gap-1 shadow-inner">
        <button
          onClick={() => {
            setActiveSubTab('scan')
          }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            activeSubTab === 'scan'
              ? 'bg-white text-emerald-800 shadow-md'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Camera className="w-4 h-4 text-emerald-600" />
          <span>Skenovat kód / Hledat</span>
        </button>

        <button
          onClick={() => {
            stopCameraScanner()
            setActiveSubTab('history')
          }}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 relative ${
            activeSubTab === 'history'
              ? 'bg-white text-emerald-800 shadow-md'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <History className="w-4 h-4 text-emerald-600" />
          <span>Historie skenů</span>
          {scanHistory.length > 0 && (
            <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full shadow-xs">
              {scanHistory.length}
            </span>
          )}
        </button>
      </div>

      {activeSubTab === 'scan' ? (
        <>
          {/* Top Banner Header */}
          <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white rounded-2xl p-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-xs">
                <ScanLine className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h2 className="font-bold text-base leading-tight">Skenování čárkových kódů & Knihovny.cz</h2>
                <p className="text-xs text-emerald-100 mt-0.5">
                  Propojeno s živým katalogem Knihovny.cz a lokální školní databází.
                </p>
              </div>
            </div>
          </div>

          {/* Camera Scanner Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">

            {isSearchingApi ? (
              <div className="py-10 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin flex items-center justify-center" />
                  <Globe className="w-6 h-6 text-emerald-600 absolute inset-0 m-auto" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Vyhledávání v katalogu Knihovny.cz</h3>
                  <p className="text-xs text-emerald-700 font-semibold mt-1 animate-pulse">{searchStatus}</p>
                </div>
              </div>
            ) : cameraActive ? (
              /* Live Camera Reader Container */
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden bg-black aspect-[4/3] flex items-center justify-center border-2 border-emerald-500 shadow-inner">
                  <div id="qr-reader" className="w-full h-full" />
                </div>

                <button
                  onClick={stopCameraScanner}
                  className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2.5 rounded-xl text-xs transition-all"
                >
                  Zastavit fotoaparát
                </button>
              </div>
            ) : (
              /* Idle State - Launch camera scanner */
              <div className="py-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-3 shadow-xs">
                  <Camera className="w-8 h-8" />
                </div>

                <h3 className="font-bold text-slate-800 text-sm">Skenovat čárkový kód / ISBN fotoaparátem</h3>
                <p className="text-xs text-slate-500 mb-4 max-w-xs leading-relaxed mt-1">
                  Namiřte fotoaparát na čárkový kód (EAN/ISBN) na zadní straně knihy. Kniha bude automaticky vyhledána v Knihovny.cz.
                </p>

                <button
                  onClick={startCameraScanner}
                  className="w-full max-w-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 text-xs"
                >
                  <Camera className="w-4 h-4 text-amber-300" />
                  <span>Spustit skener čárkových kódů</span>
                </button>
              </div>
            )}

            {/* Error banner */}
            {errorMessage && (
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2 text-left">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 leading-relaxed">{errorMessage}</p>
              </div>
            )}
          </div>

          {/* Knihovny.cz Live API Result Card */}
          {apiResult && (
            <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-4 shadow-sm animate-in fade-in duration-300 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-900 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>Nalezeno v Knihovny.cz</span>
                </span>
                <span className="bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full text-[10px]">
                  ID: {apiResult.id}
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-emerald-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm leading-tight">{apiResult.title}</h4>
                <p className="text-xs text-slate-700 font-semibold flex items-center gap-1">
                  <span>Autor:</span>
                  <span className="text-emerald-900">{apiResult.author}</span>
                </p>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1 border-t border-slate-100">
                  {apiResult.publisher && (
                    <div className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{apiResult.publisher}</span>
                    </div>
                  )}
                  {apiResult.publicationYear && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Rok: {apiResult.publicationYear}</span>
                    </div>
                  )}
                  {apiResult.isbns[0] && (
                    <div className="flex items-center gap-1 col-span-2">
                      <Tag className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-mono text-slate-800 font-bold">ISBN: {apiResult.isbns[0]}</span>
                    </div>
                  )}
                  {apiResult.pages && (
                    <div className="flex items-center gap-1 col-span-2">
                      <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{apiResult.pages}</span>
                    </div>
                  )}
                </div>

                {importedMessage ? (
                  <div className="mt-2 p-2 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold rounded-lg flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{importedMessage}</span>
                  </div>
                ) : (
                  <button
                    onClick={handleImportToCatalog}
                    className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-lg text-xs shadow transition-all flex items-center justify-center gap-1.5"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Uložit knihu z Knihovny.cz do databáze</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Last Recognized Book Local Location Card */}
          {lastRecognizedBook && (
            <div className="bg-white border-2 border-slate-300 rounded-2xl p-4 shadow-sm space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Lokalizace ve školní knihovně</span>
              </div>

              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs truncate">{lastRecognizedBook.title}</h4>
                <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{lastRecognizedBook.location}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectBook(lastRecognizedBook)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-3 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>Detail knihy & výpůjčka</span>
              </button>
            </div>
          )}

          {/* Manual Query Search Form */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
            <h3 className="font-semibold text-slate-800 text-xs flex items-center gap-2">
              <Search className="w-4 h-4 text-emerald-600" />
              <span>Vyhledat v katalogu Knihovny.cz</span>
            </h3>

            <div className="flex gap-1 bg-slate-100 p-1 rounded-xl text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => setSearchType('ISN')}
                className={`flex-1 py-1 px-2 rounded-lg transition-all ${
                  searchType === 'ISN' ? 'bg-white text-emerald-800 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                ISBN / Kód
              </button>
              <button
                type="button"
                onClick={() => setSearchType('Title')}
                className={`flex-1 py-1 px-2 rounded-lg transition-all ${
                  searchType === 'Title' ? 'bg-white text-emerald-800 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                Název
              </button>
              <button
                type="button"
                onClick={() => setSearchType('Author')}
                className={`flex-1 py-1 px-2 rounded-lg transition-all ${
                  searchType === 'Author' ? 'bg-white text-emerald-800 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                Autor
              </button>
              <button
                type="button"
                onClick={() => setSearchType('AllFields')}
                className={`flex-1 py-1 px-2 rounded-lg transition-all ${
                  searchType === 'AllFields' ? 'bg-white text-emerald-800 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                Vše
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="flex gap-2">
              <input
                type="text"
                placeholder={
                  searchType === 'ISN'
                    ? 'Zadejte ISBN (např. 9788025703670)'
                    : searchType === 'Title'
                    ? 'Zadejte název knihy...'
                    : searchType === 'Author'
                    ? 'Zadejte jméno autora...'
                    : 'Hledat v katalogu Knihovny.cz...'
                }
                value={manualQuery}
                onChange={(e) => setManualQuery(e.target.value)}
                className="flex-1 px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-3.5 py-2 rounded-xl text-xs transition-all shrink-0"
              >
                Vyhledat
              </button>
            </form>
          </div>

          {/* Quick Test Sample ISBNs */}
          <div className="bg-emerald-50/80 rounded-2xl p-4 border border-emerald-200/80 space-y-2">
            <h3 className="font-semibold text-emerald-950 text-xs flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Rychlý test dotazu na Knihovny.cz API:</span>
            </h3>
            <p className="text-[11px] text-emerald-800 mb-2">
              Otestujte ověřený dotaz na živé API Knihovny.cz kliknutím na ukázku:
            </p>

            <div className="grid grid-cols-1 gap-2">
              {sampleIsbns.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickTestIsbn(item.isbn, item.title)}
                  className="bg-white hover:bg-emerald-100 p-2.5 rounded-xl border border-emerald-200 text-left transition-all group shadow-xs hover:border-emerald-400 flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-900">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">ISBN: {item.isbn}</div>
                  </div>
                  <div className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-1 rounded-lg flex items-center gap-1 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <span>Otestovat</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* HISTORY SUB-TAB VIEW */
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="bg-emerald-100 p-2 rounded-xl text-emerald-700">
                <History className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Historie naskenovaných knih</h3>
                <p className="text-xs text-slate-500">Uložené knihy ze skeneru a vyhledávání</p>
              </div>
            </div>

            {scanHistory.length > 0 && (
              <button
                onClick={onClearHistory}
                className="text-xs text-red-600 hover:text-red-800 font-semibold bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-xl transition-all flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Smazat</span>
              </button>
            )}
          </div>

          {scanHistory.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <p className="text-xs font-semibold text-slate-600">Zatím jste nenaskenovali žádné knihy.</p>
              <button
                onClick={() => setActiveSubTab('scan')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs shadow transition-all inline-flex items-center gap-1.5"
              >
                <Camera className="w-4 h-4 text-amber-300" />
                <span>Skenovat první knihu</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {scanHistory.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-xs hover:border-emerald-300 transition-all flex flex-col space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex gap-3 items-start flex-1 overflow-hidden">
                      <div className="w-10 h-12 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 border border-emerald-200">
                        <BookOpen className="w-5 h-5" />
                      </div>

                      <div className="overflow-hidden flex-1">
                        <span className="text-[10px] text-slate-400 font-semibold block mb-0.5">
                          {item.scannedAt}
                        </span>
                        <h4 className="font-bold text-slate-900 text-xs truncate leading-snug">{item.title}</h4>
                        <p className="text-[11px] text-slate-600 font-medium truncate">{item.author}</p>
                        <span className="inline-block text-[10px] bg-slate-100 text-slate-600 font-semibold px-2 py-0.5 rounded-full mt-1">
                          {item.genre}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveHistoryItem(item.id)}
                      className="text-slate-400 hover:text-red-500 p-1.5 rounded-lg transition-colors shrink-0"
                      title="Odebrat z historie"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="bg-emerald-50/70 p-2 rounded-xl border border-emerald-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-emerald-900 truncate flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </span>

                    <button
                      onClick={() => onSelectBook(item.book)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-2.5 py-1 rounded-lg text-[11px] shadow-xs shrink-0 transition-all flex items-center gap-1"
                    >
                      <span>Detail</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
