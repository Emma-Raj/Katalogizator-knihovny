import React, { useEffect, useState, useRef } from 'react'
import { Html5Qrcode } from 'html5-qrcode'
import { Camera, Search, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function Scanner({ onScanSuccess, books = [] }) {
  const [manualCode, setManualCode] = useState('')
  const [scanning, setScanning] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [scannedResult, setScannedResult] = useState(null)
  const html5QrcodeRef = useRef(null)

  const sampleBooks = books.slice(0, 5)

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
    setScanning(true)

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
        (errorMessage) => {
          // parse errors are normal while scanning frame by frame
        }
      )
    } catch (err) {
      console.error(err)
      setScanning(false)
      setErrorMessage('Kamera nebyla nalezena nebo nemáte povolený přístup. Můžete zadat čárkový kód ručně níže.')
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

  const handleFoundCode = (code) => {
    const trimmed = code.trim()
    setScannedResult(trimmed)
    onScanSuccess(trimmed)
  }

  const handleManualSubmit = (e) => {
    e.preventDefault()
    if (manualCode.trim()) {
      handleFoundCode(manualCode)
    }
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
              Naskenujte čárkový kód na knize nebo zadejte kód manuálně.
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

      {/* Manual Code Input Form */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
        <h3 className="font-semibold text-slate-800 mb-2 text-sm flex items-center gap-2">
          <Search className="w-4 h-4 text-emerald-600" />
          <span>Ruční zadání čárkového kódu</span>
        </h3>
        <form onSubmit={handleManualSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Napr. 859000000101"
            value={manualCode}
            onChange={(e) => setManualCode(e.target.value)}
            className="flex-1 px-3 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
      <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200">
        <h3 className="font-semibold text-emerald-900 text-sm flex items-center gap-1.5 mb-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Rychlý test (simulace naskenování):</span>
        </h3>
        <p className="text-xs text-emerald-700 mb-3">
          Vyberte ukázkovou knihu pro okamžité otestování skenování:
        </p>

        <div className="space-y-2">
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
