import React, { useState, useEffect } from 'react'
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

export default function BookDetailModal({ book, onClose, onBorrowBook, onToggleMaturita, onUpdateLocation, onOpenRozbor }) {
  const [borrowerName, setBorrowerName] = useState('')
  const [showBorrowForm, setShowBorrowForm] = useState(false)
  const [borrowSuccessMsg, setBorrowSuccessMsg] = useState('')
  const [locationDraft, setLocationDraft] = useState(book?.location || '')
  const [editingLocation, setEditingLocation] = useState(false)

  useEffect(() => {
    setLocationDraft(book?.location || '')
    setEditingLocation(false)
  }, [book?.id, book?.location])

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
            <div className="flex items-center justify-between gap-2 flex-wrap mb-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                {book.isMaturita ? (
                  <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-amber-300 shadow-2xs">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
                    <span>Maturitní četba</span>
                  </span>
                ) : (
                  <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded-full border border-slate-200">
                    Běžná literatura
                  </span>
                )}
                <span className="bg-emerald-50 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {book.genre}
                </span>
              </div>

              {onToggleMaturita && (
                <button
                  type="button"
                  onClick={() => onToggleMaturita(book.id)}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-xl transition-all border flex items-center gap-1 ${
                    book.isMaturita
                      ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                  title={book.isMaturita ? 'Odebrat z maturitní četby' : 'Označit jako maturitní knihu'}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{book.isMaturita ? 'Odebrat z maturity' : 'Označit jako maturitu'}</span>
                </button>
              )}
            </div>

            <h2 className="text-xl font-bold text-slate-900 leading-snug">{book.title}</h2>
            <p className="text-sm font-semibold text-slate-600 mt-0.5">{book.author}</p>
          </div>

          {/* Maturita Rozbor Action Button if book is marked as Maturita */}
          {book.isMaturita && (
            <div className="bg-gradient-to-r from-amber-50 to-amber-100/60 border border-amber-300 rounded-2xl p-3 flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="bg-amber-500 text-slate-950 p-2 rounded-xl">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-amber-950">Maturitní rozbor díla</h4>
                  <p className="text-[11px] text-amber-800">
                    Strukturovaný rozbor k ústní maturitní zkoušce
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onOpenRozbor && onOpenRozbor(book)}
                className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 text-xs font-extrabold px-3 py-2 rounded-xl shadow-xs transition-all shrink-0 flex items-center gap-1"
              >
                <span>Otevřít rozbor</span>
              </button>
            </div>
          )}

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

          {/* Optional, editable location note */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>Umístění / poznámka</span>
            </div>
            {editingLocation ? (
              <form onSubmit={(e) => { e.preventDefault(); onUpdateLocation?.(book.id, locationDraft.trim()); setEditingLocation(false) }} className="space-y-2">
                <input
                  type="text"
                  value={locationDraft}
                  onChange={(e) => setLocationDraft(e.target.value)}
                  placeholder="Např. přibližné umístění nebo vlastní poznámka"
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 bg-emerald-700 text-white rounded-xl py-2 text-xs font-bold">Uložit</button>
                  <button type="button" onClick={() => { setLocationDraft(book.location || ''); setEditingLocation(false) }} className="px-3 bg-white border border-slate-200 rounded-xl py-2 text-xs font-semibold text-slate-600">Zrušit</button>
                  {book.location && <button type="button" onClick={() => { setLocationDraft(''); onUpdateLocation?.(book.id, ''); setEditingLocation(false) }} className="px-3 bg-red-50 border border-red-100 rounded-xl py-2 text-xs font-semibold text-red-700">Smazat</button>}
                </div>
              </form>
            ) : (
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-800 break-words">{book.location || 'Poznámka zatím nebyla vyplněna.'}</p>
                  <p className="text-[11px] text-slate-500 mt-1">{book.categoryName}</p>
                </div>
                <button type="button" onClick={() => setEditingLocation(true)} className="shrink-0 text-xs font-bold text-emerald-700 bg-white border border-emerald-200 rounded-lg px-3 py-2">Upravit</button>
              </div>
            )}
          </div>

          {/* Barcode Display */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Barcode className="w-6 h-6 text-slate-600" />
              <div>
                <span className="text-[11px] text-slate-500 block">Čárkový kód / ISBN</span>
                <span className="font-mono font-bold text-sm text-slate-800 tracking-wider">
                  {book.barcode || 'Neuvedeno'}
                </span>
              </div>
            </div>
          </div>

          {(book.publicationYear || book.publisher) && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 grid grid-cols-2 gap-3">
              {book.publicationYear && <div><span className="text-[11px] text-slate-500 block">Rok vydání</span><span className="text-sm font-semibold text-slate-800">{book.publicationYear}</span></div>}
              {book.publisher && <div><span className="text-[11px] text-slate-500 block">Nakladatelství</span><span className="text-sm font-semibold text-slate-800">{book.publisher}</span></div>}
            </div>
          )}

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
