import React from 'react'
import { BookmarkCheck, User, MapPin, GraduationCap, BookOpen, AlertCircle } from 'lucide-react'

export default function BorrowedList({ books, onSelectBook }) {
  const borrowedBooks = books.filter((b) => b.isBorrowed)

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-4 shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-amber-400 p-2.5 rounded-xl text-slate-950">
            <BookmarkCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Přehled výpůjček</h2>
            <p className="text-xs text-slate-300">
              Celkem vypůjčených knih v systému: <span className="font-bold text-amber-400">{borrowedBooks.length}</span>
            </p>
          </div>
        </div>
      </div>

      {borrowedBooks.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-xs">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-2" />
          <p className="font-semibold text-slate-800 text-sm">Všechny knihy jsou momentálně dostupné</p>
          <p className="text-xs text-slate-500 mt-1">Žádná kniha není aktuálně vypůjčená.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {borrowedBooks.map((book) => (
            <div
              key={book.id}
              onClick={() => onSelectBook(book)}
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 hover:border-amber-400 transition-all cursor-pointer space-y-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    {book.isMaturita && (
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <GraduationCap className="w-3 h-3 text-amber-600" />
                        <span>Maturita</span>
                      </span>
                    )}
                    <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {book.genre}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm leading-tight">{book.title}</h3>
                  <p className="text-xs text-slate-600 font-medium">{book.author}</p>
                </div>

                <span className="bg-red-50 text-red-700 border border-red-200 text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0">
                  Vypůjčeno
                </span>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                  <User className="w-4 h-4 text-emerald-600" />
                  <span>Vypůjčil: <strong className="text-slate-950">{book.borrowedTo || 'Nespecifikováno'}</strong></span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold">{book.location}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
