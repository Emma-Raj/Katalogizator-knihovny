import React, { useEffect, useState, useRef } from 'react'
import { flushSync } from 'react-dom'
import { Html5Qrcode } from 'html5-qrcode'
import {
  Camera,
  Search,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Globe,
  Loader2,
  PlusCircle,
  BookOpen,
  Calendar,
  User,
  Info
} from 'lucide-react'
import { searchKnihovnyCz } from '../services/knihovnyApi'

export default function Scanner({ onScanSuccess, books = [], onAddExternalBook }) {
  const [manualCode, setManualCode] = useState('')
  const [scanning, setScanning] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [scannedResult, setScannedResult] = useState(null)

  // External search state for Knihovny.cz
  const [isSearchingExternal, setIsSearchingExternal] = useState(false)
  const [externalSearchResult, setExternalSearchResult] = useState(null)

  const html5QrcodeRef = useRef(null)

  const sampleBooks = books.slice(0, 3)

  const sampleIsbns = [
    { title: 'Bílá nemoc (Karel Čapek)', barcode: '9788020719881' },
    { title: 'Hana (Alena Mornštajnová)', barcode: '9788000058825' },
    { title: 'Žítkovské bohyně (Kateřina Tučková)', barcode: '9788074971846' },
  ]

  useEffect(() => {
    return () => {
      if (html5QrcodeRef.current && html5QrcodeRef.current.isScanning) {
        html5QrcodeRef.current.stop().catch((err) => console.error(err))
      }
    }
  }, [])

  const startCamera = async () => {
    setErrorMessage('')
    setScannedResult(null)
    setExternalSearchResult(null)
    flushSync(() => {
      setScanning(true)
    })

    try {
      const html5Qrcode = new Html5Qrcode('reader')
      html5QrcodeRef.current = html5Qrcode

      await html5Qrcode.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 250, height: 180 },
        },
        (decodedText) => {
          handleFoundCode(decodedText)
          stopCamera()
        },
        () => {
          // parse errors are normal while scanning frame by frame
        }
      )
    } catch (err) {
      console.error(err)
      setScanning(false)
      if (err?.name === 'NotAllowedError') {
        setErrorMessage('Přístup k fotoaparátu byl zamítnut. Povolte přístup v nastavení prohlížeče.')
      } else if (err?.name === 'NotFoundError') {
        setErrorMessage('Zařízení nemá fotoaparát nebo nebyla nalezena žádná kamera.')
      } else {
        setErrorMessage('Při spouštění fotoaparátu došlo k chybě. Můžete zadat čárkový kód ručně níže.')
      }
    }
  }

  const stopCamera = async () => {
    if (html5QrcodeRef.current && html5QrcodeRef.current.isScanning) {
      try {
        await html5QrcodeRef.current.stop()
      } catch (err) {
        console.error(err)
      }
    }
    setScanning(false)
  }

  const handleFoundCode = async (code) => {
    const trimmed = code.trim()
    setScannedResult(trimmed)
    setExternalSearchResult(null)

    // Check if book exists in local catalog
    const matchedBook = books.find((b) => b.barcode.trim() === trimmed)

    if (matchedBook) {
      onScanSuccess(trimmed)
    } else {
      // Not in catalog -> search on Knihovny.cz
      setIsSearchingExternal(true)
      const res = await searchKnihovnyCz(trimmed)
      setIsSearchingExternal(false)
      setExternalSearchResult(res)
    }
  }

  const handleManualSubmit = (e) => {
    e.preventDefault()
    if (manualCode.trim()) {
      handleFoundCode(manualCode)
    }
  }

  const handleAddExternalToCatalog = (bookData) => {
    if (onAddExternalBook) {
      onAddExternalBook(bookData)
    }
    setExternalSearchResult(null)
  }

  return (
    <div className="p-4 space-y-5 max-w-md mx-auto pb-24">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-4 shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2.5 rounded-xl">
            <Camera className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Skenování čárkového kódu</h2>
            <p className="text-xs text-emerald-100">
              Naskenujte čárkový kód/ISBN na knize nebo zadejte kód manuálně.
            </p>
          </div>
        </div>
      </div>

      {/* Camera View Area */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 text-center">
        {!scanning ? (
          <div className="py-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3">
              <Camera className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-slate-800">Spustit skener fotoaparátu</h3>
            <p className="text-xs text-slate-500 mb-4 max-w-xs">
              Povolte přístup k fotoaparátu v mobilním prohlížeči pro automatické načtení čárkového kódu.
            </p>
            <button
              onClick={startCamera}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow transition-all active:scale-95 flex items-center gap-2"
            >
              <Camera className="w-5 h-5" />
              <span>Aktivovat kameru</span>
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div id="reader" className="w-full rounded-lg overflow-hidden bg-black min-h-[250px]"></div>
            <button
              onClick={stopCamera}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-4 py-2 rounded-xl text-sm transition-all"
            >
              Zastavit kameru
            </button>
          </div>
        )}

        {errorMessage && (
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2 text-left">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800">{errorMessage}</p>
          </div>
        )}
      </div>

      {/* External Search Loading / Results Section */}
      {isSearchingExternal && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 shadow-md flex flex-col items-center justify-center text-center space-y-3 animate-pulse">
          <Loader2 className="w-8 h-8 text-amber-600 animate-spin" />
          <div>
            <h4 className="font-bold text-amber-900 text-sm">Vyhledávám v databázi Knihovny.cz...</h4>
            <p className="text-xs text-amber-700 mt-1">
              Kniha nebyla nalezena v místním katalogu. Ověřuji ISBN: <span className="font-mono font-bold">{scannedResult}</span>
            </p>
          </div>
        </div>
      )}

      {!isSearchingExternal && externalSearchResult && (
        <div className="space-y-3">
          {externalSearchResult.found ? (
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-xl border border-amber-400/40 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <span className="bg-amber-400/20 text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-amber-400/30">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span>Nalezeno na Knihovny.cz</span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono">ISBN: {externalSearchResult.isbn}</span>
              </div>

              <div>
                <h3 className="font-extrabold text-lg text-white leading-snug">
                  {externalSearchResult.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold mt-1">
                  <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{externalSearchResult.author}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Rok vydání: <strong className="text-slate-200">{externalSearchResult.year}</strong></span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleAddExternalToCatalog(externalSearchResult)}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3 rounded-xl shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2 text-sm"
                >
                  <PlusCircle className="w-5 h-5 text-slate-950" />
                  <span>Přidat do katalogu</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 shadow-sm text-left space-y-3">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-900 text-sm">Kniha nebyla nalezena</h4>
                  <p className="text-xs text-red-700 mt-0.5">
                    {externalSearchResult.message || `Čárkový kód / ISBN ${scannedResult} nebyl nalezen v databázi Knihovny.cz.`}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Manual Code Input Form */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
        <h3 className="font-semibold text-slate-800 mb-2 text-sm flex items-center gap-2">
          <Search className="w-4 h-4 text-emerald-600" />
          <span>Ruční zadání čárkového kódu / ISBN</span>
        </h3>
        <form onSubmit={handleManualSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Např. 9788020719881 nebo 859000000101"
            value={manualCode}
            onChange={(e) => setManualCode(e.target.value)}
            className="flex-1 px-3 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-all"
          >
            Vyhledat
          </button>
        </form>
      </div>

      {/* Quick Test Barcode Simulators */}
      <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 space-y-3">
        <h3 className="font-semibold text-emerald-900 text-sm flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Rychlý test (simulace naskenování):</span>
        </h3>

        {/* Existing local books */}
        <div>
          <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1.5">
            1. Knihy již v místním katalogu:
          </span>
          <div className="space-y-1.5">
            {sampleBooks.map((book) => (
              <button
                key={book.id}
                onClick={() => handleFoundCode(book.barcode)}
                className="w-full text-left bg-white hover:bg-emerald-100 p-2.5 rounded-xl border border-emerald-200 transition-all flex items-center justify-between group"
              >
                <div className="overflow-hidden pr-2">
                  <div className="font-semibold text-xs text-slate-800 truncate">{book.title}</div>
                  <div className="text-[11px] text-slate-500 truncate">{book.author}</div>
                </div>
                <span className="font-mono text-[11px] bg-slate-100 px-2 py-1 rounded text-slate-700 group-hover:bg-emerald-200 shrink-0">
                  {book.barcode}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* External Knihovny.cz test ISBNs */}
        <div>
          <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-amber-600" />
            <span>2. Test Hledání podle ISBN na Knihovny.cz (nové knihy):</span>
          </span>
          <div className="space-y-1.5">
            {sampleIsbns.map((item) => (
              <button
                key={item.barcode}
                onClick={() => handleFoundCode(item.barcode)}
                className="w-full text-left bg-amber-50/80 hover:bg-amber-100 p-2.5 rounded-xl border border-amber-200 transition-all flex items-center justify-between group"
              >
                <div className="overflow-hidden pr-2">
                  <div className="font-semibold text-xs text-slate-900 truncate">{item.title}</div>
                  <div className="text-[11px] text-amber-800">Vyhledat na Knihovny.cz</div>
                </div>
                <span className="font-mono text-[11px] bg-amber-200 px-2 py-1 rounded text-amber-950 font-bold shrink-0">
                  {item.barcode}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
