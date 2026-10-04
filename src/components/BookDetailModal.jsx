import React, { useState } from 'react'
import {
  X,
  MapPin,
  GraduationCap,
  Barcode,
  CheckCircle2,
  XCircle,
  User,
  Calendar,
  BookmarkPlus,
  BookOpen,
  Info
} from 'lucide-react'

export default function BookDetailModal({ book, onClose, onBorrowBook }) {
  const [borrowerName, setBorrowerName] = useState('')
  const [showBorrowForm, setShowBorrowForm] = useState(false)
  const [borrowSuccessMsg, setBorrowSuccessMsg] = useState('')

  if (!book) return null

  const handleBorrowSubmit = (e) => {
    e.preventDefault()
    if (!borrowerName.trim()) return

    onBorrowBook(book.id, borrowerName.trim())
    setBorrowSuccessMsg(`Kniha byla úspěšně vypůjčena uživateli: ${borrowerName.trim()}`)
    setShowBorrowForm(false)
  }

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 transition-all">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-200">

        {/* Header Bar */}
        <div className="p-4 bg-emerald-800 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-300" />
            <span className="font-semibold text-sm">Detail knihy</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-emerald-700 text-emerald-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 overflow-y-auto space-y-4">

          {/* Main Title & Author */}
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              {book.isMaturita ? (
                <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-amber-300">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
                  <span>Maturitní četba</span>
                </span>
              ) : (
                <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Běžná literatura
                </span>
              )}
              <span className="bg-emerald-50 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full border border-emerald-200">
                {book.genre}
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900 leading-snug">{book.title}</h2>
            <p className="text-sm font-semibold text-slate-600 mt-0.5">{book.author}</p>
          </div>

          {/* Status Badge */}
          <div className="p-3.5 rounded-2xl border flex items-center justify-between bg-slate-50 border-slate-200">
            <div>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Stav výpůjčky
              </span>
              {book.isBorrowed ? (
                <span className="text-red-600 font-bold text-sm flex items-center gap-1.5 mt-0.5">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span>Vypůjčeno</span>
                </span>
              ) : (
                <span className="text-emerald-600 font-bold text-sm flex items-center gap-1.5 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Dostupná k půjčení</span>
                </span>
              )}
            </div>

            {book.isBorrowed && book.borrowedTo && (
              <div className="text-right">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Vypůjčil/a
                </span>
                <span className="text-xs font-bold text-slate-800 flex items-center justify-end gap-1 mt-0.5">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>{book.borrowedTo}</span>
                </span>
              </div>
            )}
          </div>

          {/* LOCATION (Lokalizátor) - Prominent Box */}
          <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>Přesné umístění v knihovně</span>
            </div>
            <p className="text-base font-extrabold text-emerald-950">
              {book.location}
            </p>
            <p className="text-xs text-emerald-700 mt-1">
              {book.categoryName}
            </p>
          </div>

          {/* Barcode Display */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Barcode className="w-6 h-6 text-slate-600" />
              <div>
                <span className="text-[11px] text-slate-500 block">Čárkový kód / ISBN</span>
                <span className="font-mono font-bold text-sm text-slate-800 tracking-wider">
                  {book.barcode}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-slate-500" />
              <span>Popis knihy</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
              {book.description}
            </p>
          </div>

          {/* Borrow Action Section */}
          {borrowSuccessMsg && (
            <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 p-3 rounded-xl text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{borrowSuccessMsg}</span>
            </div>
          )}

          {!book.isBorrowed && !showBorrowForm && (
            <button
              onClick={() => setShowBorrowForm(true)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
            >
              <BookmarkPlus className="w-5 h-5" />
              <span>Vypůjčit knihu</span>
            </button>
          )}

          {!book.isBorrowed && showBorrowForm && (
            <form onSubmit={handleBorrowSubmit} className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl space-y-2.5">
              <label className="block text-xs font-bold text-amber-900">
                Zadejte jméno vypůjčitele:
              </label>
              <input
                type="text"
                placeholder="Např. Jan Novák (3.A)"
                value={borrowerName}
                onChange={(e) => setBorrowerName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-amber-300 rounded-xl text-xs bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 rounded-xl text-xs shadow transition-all"
                >
                  Potvrdit výpůjčku
                </button>
                <button
                  type="button"
                  onClick={() => setShowBorrowForm(false)}
                  className="px-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-2 rounded-xl text-xs"
                >
                  Zrušit
                </button>
              </div>
            </form>
          )}

          {book.isBorrowed && (
            <div className="bg-slate-100 border border-slate-200 p-3 rounded-xl text-center text-xs text-slate-600">
              Tato kniha je v současné době vypůjčená ({book.borrowedTo}).
            </div>
          )}

        </div>

        {/* Footer Close */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 shrink-0">
          <button
            onClick={onClose}
            className="w-full bg-white hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl border border-slate-300 text-xs transition-all"
          >
            Zavřít
          </button>
        </div>

      </div>
    </div>
  )
}
