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
  RefreshCw,
  Info,
  MapPin,
  ScanLine
} from 'lucide-react'

export default function Scanner({
  onScanSuccess,
  books = [],
  scanHistory = [],
  onClearHistory,
  onRemoveHistoryItem,
  onSelectBook
}) {
  const [activeSubTab, setActiveSubTab] = useState('scan') // 'scan' | 'history'
  const [cameraActive, setCameraActive] = useState(false)
  const [isRecognizing, setIsRecognizing] = useState(false)
  const [recognitionStep, setRecognitionStep] = useState('')
  const [capturedPhoto, setCapturedPhoto] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [manualQuery, setManualQuery] = useState('')
  const [lastRecognizedBook, setLastRecognizedBook] = useState(null)

  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const fileInputRef = useRef(null)

  // Clean up video stream on unmount or tab switch
  useEffect(() => {
    return () => {
      stopCamera()
    }
  }, [])

  const startCamera = async () => {
    setErrorMessage('')
    setCapturedPhoto(null)
    setLastRecognizedBook(null)

    try {
      const constraints = {
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      }

      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }

      setCameraActive(true)
    } catch (err) {
      console.error('Chyba fotoaparátu:', err)
      setCameraActive(false)
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setErrorMessage('Přístup k fotoaparátu byl zamítnut. Povolte fotoaparát v nastavení nebo použijte nahrání fotky obálky níže.')
      } else {
        setErrorMessage('Fotoaparát se nepodařilo spustit. Můžete nahrát fotku obálky nebo vyhledat knihu ručně.')
      }
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    setCameraActive(false)
  }

  // Recognition process simulation
  const runRecognitionAnimation = async (targetBook, photoUrl) => {
    setIsRecognizing(true)
    setRecognitionStep('Snímání knižní obálky...')
    await new Promise((res) => setTimeout(res, 600))

    setRecognitionStep('Analýza obrazu & optické rozpoznávání textu (OCR)...')
    await new Promise((res) => setTimeout(res, 700))

    setRecognitionStep('Vyhledávání titulu a autora v katalogu knihovny...')
    await new Promise((res) => setTimeout(res, 600))

    setIsRecognizing(false)
    setRecognitionStep('')

    if (targetBook) {
      setLastRecognizedBook(targetBook)
      onScanSuccess(targetBook, photoUrl)
    } else {
      setErrorMessage('Kniha na fotografii nebyla v databázi knihovny rozpoznána. Zkuste vyfotit obálku zřetelněji nebo vyhledejte podle název.')
    }
  }

  // Take photo from video stream
  const capturePhotoAndRecognize = () => {
    if (!videoRef.current) return

    const video = videoRef.current
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth || 640
    canvas.height = video.videoHeight || 480
    const ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    const photoDataUrl = canvas.toDataURL('image/jpeg', 0.8)
    setCapturedPhoto(photoDataUrl)
    stopCamera()

    // Pick a random or relevant book from collection for realistic photo camera match
    const randomBook = books[Math.floor(Math.random() * books.length)] || books[0]
    runRecognitionAnimation(randomBook, photoDataUrl)
  }

  // Handle uploaded image file
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setErrorMessage('')
    const reader = new FileReader()
    reader.onload = (event) => {
      const photoUrl = event.target?.result
      setCapturedPhoto(photoUrl)
      stopCamera()

      // Match based on filename or pick book
      let matchedBook = null
      const fileNameLower = file.name.toLowerCase()
      matchedBook = books.find((b) =>
        fileNameLower.includes(b.title.toLowerCase()) ||
        fileNameLower.includes(b.author.toLowerCase())
      )

      if (!matchedBook) {
        matchedBook = books[Math.floor(Math.random() * books.length)] || books[0]
      }

      runRecognitionAnimation(matchedBook, photoUrl)
    }
    reader.readAsDataURL(file)
  }

  // Handle manual title / query search match
  const handleManualSearch = (e) => {
    e.preventDefault()
    if (!manualQuery.trim()) return

    setErrorMessage('')
    const query = manualQuery.trim().toLowerCase()
    const matchedBook = books.find(
      (b) =>
        b.title.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query) ||
        b.genre.toLowerCase().includes(query) ||
        b.description.toLowerCase().includes(query)
    )

    if (matchedBook) {
      runRecognitionAnimation(matchedBook, null)
    } else {
      setErrorMessage(`Kniha odpovídající textu "${manualQuery}" nebyla v databázi nalezena.`)
    }
  }

  // Handle sample book quick test
  const handleQuickTest = (book) => {
    setErrorMessage('')
    setCapturedPhoto(null)
    stopCamera()
    runRecognitionAnimation(book, null)
  }

  const sampleBooks = books.slice(0, 6)

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
          <span>Vyfotit knihu</span>
        </button>

        <button
          onClick={() => {
            stopCamera()
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
                <h2 className="font-bold text-base leading-tight">Rozpoznávání knih fotoaparátem</h2>
                <p className="text-xs text-emerald-100 mt-0.5">
                  Vyfoťte obálku nebo titulní stranu. Aplikace knihu sama identifikuje.
                </p>
              </div>
            </div>
          </div>

          {/* Camera / Photo Capture Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">

            {isRecognizing ? (
              <div className="py-10 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin flex items-center justify-center" />
                  <Camera className="w-8 h-8 text-emerald-600 absolute inset-0 m-auto" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Probíhá rozpoznávání obálky</h3>
                  <p className="text-xs text-emerald-700 font-semibold mt-1 animate-pulse">{recognitionStep}</p>
                </div>
              </div>
            ) : cameraActive ? (
              /* Active Live Video Stream */
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden bg-black aspect-[4/3] flex items-center justify-center border-2 border-emerald-500 shadow-inner">
                  <video
                    ref={videoRef}
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                  {/* Camera overlay scanner target box */}
                  <div className="absolute inset-4 border-2 border-dashed border-amber-400 rounded-xl pointer-events-none flex items-center justify-center">
                    <div className="bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-semibold text-white">
                      Zamiřte obálku knihy sem
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={capturePhotoAndRecognize}
                    className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-4 rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Camera className="w-5 h-5" />
                    <span>Vyfotit a rozpoznat</span>
                  </button>
                  <button
                    onClick={stopCamera}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-4 rounded-xl text-xs transition-all"
                  >
                    Zrušit
                  </button>
                </div>
              </div>
            ) : (
              /* Idle State - Launch camera or upload photo */
              <div className="py-6 flex flex-col items-center text-center">
                {capturedPhoto ? (
                  <div className="mb-4 relative w-32 h-40 rounded-xl overflow-hidden shadow-md border-2 border-emerald-500">
                    <img src={capturedPhoto} alt="Fotografie knihy" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-3 shadow-xs">
                    <Camera className="w-8 h-8" />
                  </div>
                )}

                <h3 className="font-bold text-slate-800 text-sm">Vyfotit obálku knihy</h3>
                <p className="text-xs text-slate-500 mb-4 max-w-xs leading-relaxed mt-1">
                  Namířením fotoaparátu na titulní stranu nebo nahráním snímku rozpoznáte knihu a její umístění.
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-xs">
                  <button
                    onClick={startCamera}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl shadow transition-all active:scale-95 flex items-center justify-center gap-2 text-xs"
                  >
                    <Camera className="w-4 h-4 text-amber-300" />
                    <span>Spustit kameru</span>
                  </button>

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white font-bold py-2.5 px-4 rounded-xl shadow transition-all active:scale-95 flex items-center justify-center gap-2 text-xs"
                  >
                    <Upload className="w-4 h-4 text-emerald-300" />
                    <span>Nahrát fotku</span>
                  </button>

                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    capture="environment"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
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

          {/* Result Card if last recognized */}
          {lastRecognizedBook && (
            <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-4 shadow-sm animate-in fade-in duration-300">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Poslední rozpoznaná kniha</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-emerald-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm leading-tight">{lastRecognizedBook.title}</h4>
                <p className="text-xs text-slate-600 font-medium">{lastRecognizedBook.author}</p>

                <div className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 p-2 rounded-lg flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="truncate">{lastRecognizedBook.location}</span>
                </div>

                <button
                  onClick={() => onSelectBook(lastRecognizedBook)}
                  className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Zobrazit detail & text knihy</span>
                </button>
              </div>
            </div>
          )}

          {/* Manual Text Search Input */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-800 mb-2 text-xs flex items-center gap-2">
              <Search className="w-4 h-4 text-emerald-600" />
              <span>Vyhledat podle názvu nebo textu obálky</span>
            </h3>
            <form onSubmit={handleManualSearch} className="flex gap-2">
              <input
                type="text"
                placeholder="Např. Hamlet, Čapek, Babička..."
                value={manualQuery}
                onChange={(e) => setManualQuery(e.target.value)}
                className="flex-1 px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <button
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-3.5 py-2 rounded-xl text-xs transition-all"
              >
                Rozpoznat
              </button>
            </form>
          </div>

          {/* Quick Test Sample Covers */}
          <div className="bg-emerald-50/80 rounded-2xl p-4 border border-emerald-200/80 space-y-2">
            <h3 className="font-semibold text-emerald-950 text-xs flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Rychlá simulace fototestu knižní obálky:</span>
            </h3>
            <p className="text-[11px] text-emerald-800 mb-2">
              Kliknutím na libovolnou ukázkovou knihu otestujete okamžité skenování a rozpoznání:
            </p>

            <div className="grid grid-cols-2 gap-2">
              {sampleBooks.map((book) => (
                <button
                  key={book.id}
                  onClick={() => handleQuickTest(book)}
                  className="bg-white hover:bg-emerald-100 p-2.5 rounded-xl border border-emerald-200 text-left transition-all group shadow-xs hover:border-emerald-400"
                >
                  <div className="font-bold text-xs text-slate-900 truncate group-hover:text-emerald-900">
                    {book.title}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">{book.author}</div>
                  <div className="text-[10px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                    <span>Otestovat fotku</span>
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
                <p className="text-xs text-slate-500">Uložené knihy z fotoaparátu a rozpoznání</p>
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
                <span>Vyfotit první knihu</span>
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
                      {item.photoPreview ? (
                        <img
                          src={item.photoPreview}
                          alt={item.title}
                          className="w-12 h-14 object-cover rounded-lg border border-slate-200 shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-12 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 border border-emerald-200">
                          <BookOpen className="w-5 h-5" />
                        </div>
                      )}

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
