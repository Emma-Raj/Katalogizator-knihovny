import React, { useEffect, useState, useRef } from 'react'
import { flushSync } from 'react-dom'
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode'
import { Camera, Search, Sparkles, AlertCircle, Library, Loader2, Plus, CheckCircle2, Upload, Image as ImageIcon } from 'lucide-react'
import { searchBookByIsbn, normalizeIsbnTo13 } from '../services/knihovnyApi'

export default function Scanner({ onScanSuccess, books = [], onAddBook }) {
  const [manualCode, setManualCode] = useState('')
  const [scanning, setScanning] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [scannedResult, setScannedResult] = useState(null)

  // File upload scan state
  const [isScanningFile, setIsScanningFile] = useState(false)
  const [fileScanError, setFileScanError] = useState('')

  // Online Knihovny.cz search state
  const [onlineSearchResult, setOnlineSearchResult] = useState(null)
  const [isSearchingOnline, setIsSearchingOnline] = useState(false)
  const [onlineError, setOnlineError] = useState('')
  const [addSuccessMsg, setAddSuccessMsg] = useState('')

  const html5QrcodeRef = useRef(null)
  const fileInputRef = useRef(null)
  const sampleBooks = books.slice(0, 5)

  useEffect(() => {
    return () => {
      if (html5QrcodeRef.current && html5QrcodeRef.current.isScanning) {
        html5QrcodeRef.current.stop().catch((err) => console.error(err))
      }
    }
  }, [])

  const getScannerConfig = () => {
    const formatsToSupport = [
      Html5QrcodeSupportedFormats.EAN_13,
      Html5QrcodeSupportedFormats.EAN_8,
      Html5QrcodeSupportedFormats.CODE_128,
      Html5QrcodeSupportedFormats.CODE_39,
      Html5QrcodeSupportedFormats.UPC_A,
      Html5QrcodeSupportedFormats.UPC_E,
      Html5QrcodeSupportedFormats.QR_CODE
    ]
    return { formatsToSupport, verbose: false }
  }

  const startCamera = async () => {
    setErrorMessage('')
    setScannedResult(null)
    setOnlineSearchResult(null)
    setOnlineError('')
    setFileScanError('')

    flushSync(() => {
      setScanning(true)
    })

    try {
      const html5Qrcode = new Html5Qrcode('reader', getScannerConfig())
      html5QrcodeRef.current = html5Qrcode

      await html5Qrcode.start(
        { facingMode: 'environment' },
        {
          fps: 15,
          qrbox: { width: 280, height: 160 },
          aspectRatio: 1.333333
        },
        (decodedText) => {
          handleFoundCode(decodedText)
          stopCamera()
        },
        () => {
          // parse errors during scanning frames
        }
      )
    } catch (err) {
      console.error('Camera error:', err)
      setScanning(false)
      if (err?.name === 'NotAllowedError') {
        setErrorMessage('Přístup k fotoaparátu byl zamítnut. Povolte přístup k fotaparátu v nastavení prohlížeče.')
      } else if (err?.name === 'NotFoundError') {
        setErrorMessage('Zařízení nemá kameru nebo nebyla nalezena žádná dostupná kamera.')
      } else {
        setErrorMessage('Při spouštění fotoaparátu došlo k chybě. Můžete nahrát fotku kódu ze souboru nebo zadat kód ručně.')
      }
    }
  }

  const stopCamera = async () => {
    if (html5QrcodeRef.current && html5QrcodeRef.current.isScanning) {
      try {
        await html5QrcodeRef.current.stop()
      } catch (err) {
        console.error('Stop camera error:', err)
      }
    }
    setScanning(false)
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsScanningFile(true)
    setFileScanError('')
    setErrorMessage('')
    setScannedResult(null)
    setOnlineSearchResult(null)

    try {
      const html5Qrcode = new Html5Qrcode('file-scanner-temp', getScannerConfig())
      const decodedText = await html5Qrcode.scanFile(file, true)
      setIsScanningFile(false)

      if (decodedText) {
        handleFoundCode(decodedText)
      } else {
        setFileScanError('Na fotce nebyl rozpoznán čárkový kód / EAN. Zkuste nahraný obrázek lépe oříznout nebo pořídit ostřejší fotku.')
      }
    } catch (err) {
      console.error('File scan error:', err)
      setIsScanningFile(false)
      setFileScanError('Na vybraném obrázku se nepodařilo přečíst čárkový kód (EAN/ISBN). Ujistěte se, že je čárkový kód na fotce jasně viditelný.')
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleFoundCode = (code) => {
    const trimmed = code.trim()
    setScannedResult(trimmed)
    setManualCode(trimmed)
    setOnlineSearchResult(null)
    setOnlineError('')

    // Skontrolujeme, či máme knihu v lokálnej databáze
    const matchedBook = books.find(
      (b) => b.barcode.trim() === trimmed || normalizeIsbnTo13(b.barcode) === normalizeIsbnTo13(trimmed)
    )

    if (matchedBook) {
      onScanSuccess(trimmed)
    } else {
      // Ak nie je v lokálnej databáze, zavoláme onScanSuccess
      // a automaticky vyhľadáme v českom katalogu Knihovny.cz
      onScanSuccess(trimmed)
      handleOnlineSearch(trimmed)
    }
  }

  const handleOnlineSearch = async (isbnToSearch) => {
    const targetIsbn = isbnToSearch || manualCode
    if (!targetIsbn) return

    setIsSearchingOnline(true)
    setOnlineError('')
    setOnlineSearchResult(null)

    const res = await searchBookByIsbn(targetIsbn)
    setIsSearchingOnline(false)

    if (res.success && res.book) {
      setOnlineSearchResult(res.book)
    } else {
      setOnlineError(res.error || 'Kniha nebyla v české Knihovny.cz nalezena.')
    }
  }

  const handleImportOnlineBook = () => {
    if (!onlineSearchResult || !onAddBook) return

    const b = onlineSearchResult
    let desc = ''
    if (b.publisher) desc += `Nakladatel: ${b.publisher}`
    if (b.publicationYear) desc += desc ? `, rok ${b.publicationYear}` : `Rok: ${b.publicationYear}`
    if (b.physicalDescription) desc += desc ? `. ${b.physicalDescription}` : b.physicalDescription

    const newBook = {
      id: `book-knihovny-${Date.now()}`,
      title: b.title,
      author: b.author,
      genre: 'Beletrie',
      category: 'ceska_20_21',
      categoryName: 'Česká literatura 20. a 21. století',
      isMaturita: false,
      barcode: b.isbn,
      location: 'Sekce Naskenované – Regál 1, Police 1',
      description: desc || `Importováno z Knihovny.cz (${b.isbn}).`,
      isBorrowed: false,
      borrowedTo: '',
      borrowedDate: '',
    }

    onAddBook(newBook)
    setAddSuccessMsg(`Kniha "${b.title}" byla uložena do školní databáze!`)
    setOnlineSearchResult(null)
    setTimeout(() => setAddSuccessMsg(''), 4000)
  }

  const handleManualSubmit = (e) => {
    e.preventDefault()
    if (manualCode.trim()) {
      handleFoundCode(manualCode)
    }
  }

  return (
    <div className="p-4 space-y-5 max-w-md mx-auto pb-24">
      {/* Hidden container for file scanning */}
      <div id="file-scanner-temp" className="hidden"></div>

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-4 shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2.5 rounded-xl">
            <Camera className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Čtečka čárkových kódů & ISBN</h2>
            <p className="text-xs text-emerald-100">
              Skener fotoaparátu nebo načtení z obrázku s prohledáním Knihovny.cz.
            </p>
          </div>
        </div>
      </div>

      {/* Success Notification for imported book */}
      {addSuccessMsg && (
        <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 p-3 rounded-2xl text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{addSuccessMsg}</span>
        </div>
      )}

      {/* Camera View & Image Upload Scanner Card */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 text-center space-y-4">
        {!scanning ? (
          <div className="py-4 flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
              <Camera className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm">Spustit kamerový skener</h3>
              <p className="text-xs text-slate-500 max-w-xs mt-1">
                Naskenujte čárkový kód (EAN / ISBN) v reálném čase pomocí fotoaparátu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 w-full pt-1">
              <button
                onClick={startCamera}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl shadow transition-all active:scale-95 flex items-center justify-center gap-2 text-xs"
              >
                <Camera className="w-4 h-4" />
                <span>Aktivovat kameru</span>
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isScanningFile}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
              >
                {isScanningFile ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                    <span>Čtu obrázek...</span>
                  </>
                ) : (
                  <>
                    <ImageIcon className="w-4 h-4 text-slate-600" />
                    <span>Nahrát fotku kódu</span>
                  </>
                )}
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        ) : (
          <div className="space-y-3">
            <div id="reader" className="w-full rounded-xl overflow-hidden bg-slate-950 min-h-[250px] border border-slate-800"></div>
            <button
              onClick={stopCamera}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-4 py-2 rounded-xl text-xs transition-all"
            >
              Zastavit kameru
            </button>
          </div>
        )}

        {errorMessage && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2 text-left">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900">{errorMessage}</p>
          </div>
        )}

        {fileScanError && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2 text-left">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900">{fileScanError}</p>
          </div>
        )}
      </div>

      {/* Manual Code Input Form */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
        <h3 className="font-semibold text-slate-800 text-sm flex items-center gap-2">
          <Search className="w-4 h-4 text-emerald-600" />
          <span>Ruční zadání čárkového kódu / ISBN</span>
        </h3>
        <form onSubmit={handleManualSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Napr. 9788025703670 nebo 859..."
            value={manualCode}
            onChange={(e) => setManualCode(e.target.value)}
            className="flex-1 px-3 py-2.5 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
          />
          <button
            type="submit"
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-4 py-2.5 rounded-xl text-xs transition-all"
          >
            Hledat
          </button>
        </form>

        <div className="flex gap-2 pt-1">
          <button
            type="button"
            onClick={() => handleOnlineSearch(manualCode)}
            disabled={isSearchingOnline}
            className="w-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-semibold p-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
          >
            {isSearchingOnline ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                <span>Vyhledávám v Knihovny.cz...</span>
              </>
            ) : (
              <>
                <Library className="w-4 h-4 text-emerald-600" />
                <span>Vyhledat přímo v Knihovny.cz</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Scanned code display */}
      {scannedResult && (
        <div className="p-3 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-600 font-medium">Naskenovaný kód:</span>
          <span className="font-mono font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-300">
            {scannedResult}
          </span>
        </div>
      )}

      {/* Online Knihovny.cz Search Result Preview Card */}
      {onlineSearchResult && (
        <div className="bg-gradient-to-br from-emerald-900 to-teal-900 text-white rounded-2xl p-4 shadow-lg border border-emerald-700 space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-900 px-2 py-0.5 rounded-md">
              Nalezeno v Knihovny.cz
            </span>
            <span className="text-xs font-mono text-emerald-200">ISBN: {onlineSearchResult.isbn}</span>
          </div>

          <div>
            <h4 className="font-bold text-base leading-tight text-white mb-1">{onlineSearchResult.title}</h4>
            <p className="text-xs text-amber-200 font-medium">Autor: {onlineSearchResult.author}</p>
          </div>

          <div className="text-[11px] text-emerald-100 space-y-0.5 bg-black/20 p-2.5 rounded-xl border border-white/10">
            {onlineSearchResult.publisher && <div><strong>Nakladatel:</strong> {onlineSearchResult.publisher}</div>}
            {onlineSearchResult.publicationYear && <div><strong>Rok vydání:</strong> {onlineSearchResult.publicationYear}</div>}
            {onlineSearchResult.publicationPlace && <div><strong>Místo:</strong> {onlineSearchResult.publicationPlace}</div>}
            {onlineSearchResult.physicalDescription && <div><strong>Popis:</strong> {onlineSearchResult.physicalDescription}</div>}
            {onlineSearchResult.cnb && <div><strong>ČNB:</strong> {onlineSearchResult.cnb}</div>}
          </div>

          {onAddBook && (
            <button
              onClick={handleImportOnlineBook}
              className="w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold py-2.5 px-4 rounded-xl shadow transition-all flex items-center justify-center gap-2 text-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Uložit knihu do školního katalogu</span>
            </button>
          )}
        </div>
      )}

      {onlineError && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-2.5 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>{onlineError}</span>
        </div>
      )}

      {/* Quick Test Barcode Simulators */}
      <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 space-y-3">
        <h3 className="font-semibold text-emerald-900 text-sm flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Rychlý test (ISBN z ČESKÉHO KATALOGU):</span>
        </h3>

        <div className="bg-white p-3 rounded-xl border border-emerald-200 text-xs space-y-2">
          <div className="font-semibold text-slate-800">Test s ukázkovou knihou z Knihovny.cz:</div>
          <button
            onClick={() => {
              setManualCode('9788025703670')
              handleOnlineSearch('9788025703670')
            }}
            className="w-full text-left bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-mono font-bold p-2 rounded-lg border border-emerald-300 text-xs flex items-center justify-between"
          >
            <span>ISBN 9788025703670</span>
            <span className="text-[10px] bg-emerald-700 text-white px-2 py-0.5 rounded">Otestovat API</span>
          </button>
        </div>

        <div className="space-y-2 pt-1">
          <div className="text-xs font-semibold text-emerald-800">Lokální knihy ve škole:</div>
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
    </div>
  )
}
