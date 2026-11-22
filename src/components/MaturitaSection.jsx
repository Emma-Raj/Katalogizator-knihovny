import React, { useState, useEffect } from 'react'
import { GraduationCap, BookOpen, CheckCircle, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

import { hasRozbor } from '../data/maturitaRozbory'

export default function MaturitaSection({ books, onSelectBook, onOpenRozbor }) {
  const sections = [
    {
      id: 'do_18_stoleti',
      title: 'Světová a česká literatura do konce 18. století',
      minCount: 'minimálně 2 díla',
      color: 'from-amber-600 to-amber-700',
    },
    {
      id: '19_stoleti',
      title: 'Světová a česká literatura 19. století',
      minCount: 'minimálně 3 díla',
      color: 'from-emerald-600 to-emerald-700',
    },
    {
      id: 'svetova_20_21',
      title: 'Světová literatura 20. a 21. století',
      minCount: 'minimálně 4 díla',
      color: 'from-blue-600 to-blue-700',
    },
    {
      id: 'ceska_20_21',
      title: 'Česká literatura 20. a 21. století',
      minCount: 'minimálně 5 děl',
      color: 'from-teal-600 to-teal-700',
    },
  ]

  const [openSection, setOpenSection] = useState('do_18_stoleti')
  const [shelfIds, setShelfIds] = useState(() => {
    try { return JSON.parse(localStorage.getItem('bma_maturita_shelf_v1') || '[]') } catch { return [] }
  })

  useEffect(() => {
    localStorage.setItem('bma_maturita_shelf_v1', JSON.stringify(shelfIds))
  }, [shelfIds])

  const toggleShelf = (bookId) => {
    setShelfIds((prev) => prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId])
  }

  const shelfBooks = books.filter((book) => shelfIds.includes(book.id) && book.isMaturita)

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id)
  }

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto pb-24">
      {/* Maturita Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-2xl p-4 shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-white/30 p-2.5 rounded-xl">
            <GraduationCap className="w-7 h-7 text-slate-950" />
          </div>
          <div>
            <h2 className="font-extrabold text-lg leading-tight">Maturitní seznam děl</h2>
            <p className="text-xs font-medium text-amber-950">Školní rok 2026/2027 • Čtyřleté studium</p>
          </div>
        </div>
      </div>

      {/* Personal maturita reading shelf */}
      <section className="bg-white border border-emerald-200 rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="font-extrabold text-emerald-950 text-sm flex items-center gap-2"><BookOpen className="w-4 h-4 text-emerald-700" /> Moje maturitní četba</h3>
            <p className="text-[11px] text-slate-500 mt-1">Vlastní výběr knih z oficiálního seznamu.</p>
          </div>
          <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1">{shelfBooks.length} {shelfBooks.length === 1 ? 'kniha' : shelfBooks.length < 5 ? 'knihy' : 'knih'}</span>
        </div>
        {shelfBooks.length ? (
          <div className="space-y-1.5">
            {shelfBooks.map((book) => (
              <div key={book.id} className="flex items-center justify-between gap-2 bg-emerald-50/70 rounded-xl px-3 py-2">
                <button type="button" onClick={() => onSelectBook(book)} className="min-w-0 text-left">
                  <span className="block text-xs font-bold text-slate-800">{book.title}</span>
                  <span className="block text-[11px] text-slate-500">{book.author}</span>
                </button>
                <button type="button" onClick={() => toggleShelf(book.id)} className="shrink-0 text-[11px] font-bold text-red-700 px-2 py-1 rounded-lg hover:bg-red-50">Odebrat</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500 bg-slate-50 rounded-xl p-3">Zatím tu nemáš žádné knihy. Přidej si je tlačítkem „Přidat na poličku“ u vybraného díla níže.</p>
        )}
      </section>

      {/* Categories Accordions */}
      <div className="space-y-3">
        {sections.map((sec) => {
          const sectionBooks = books.filter((b) => b.category === sec.id && b.isMaturita)
          const isOpen = openSection === sec.id

          return (
            <div key={sec.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <button
                onClick={() => toggleSection(sec.id)}
                className="maturita-period-header w-full p-4 text-left flex items-center justify-between transition-colors text-white"
              >
                <div className="pr-2 min-w-0">
                  <h3 className="block text-base leading-snug font-extrabold text-white">
                    {sec.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold bg-white/20 px-2 py-0.5 rounded-full">
                      {sec.minCount}
                    </span>
                    <span className="text-xs font-bold text-white">
                      {sectionBooks.length} {sectionBooks.length === 1 ? 'dílo' : sectionBooks.length < 5 ? 'díla' : 'děl'}
                    </span>
                  </div>
                </div>
                <div>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-white" /> : <ChevronDown className="w-5 h-5 text-white" />}
                </div>
              </button>

              {isOpen && (
                <div className="p-3 divide-y divide-slate-100 bg-slate-50/50 space-y-2">
                  {sectionBooks.map((book) => (
                    <div
                      key={book.id}
                      onClick={() => onSelectBook(book)}
                      className="pt-2 first:pt-0 pb-1 cursor-pointer hover:bg-emerald-50/60 p-2 rounded-xl transition-colors flex items-center justify-between gap-2"
                    >
                      <div>
                        <h4 className="font-bold text-xs text-slate-900">{book.title}</h4>
                        <p className="text-[11px] text-slate-600">{book.author}</p>
                        {book.location && <div className="flex items-center gap-1 text-[10px] text-slate-500 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>Poznámka: {book.location}</span>
                        </div>}
                      </div>

                      <div className="shrink-0 flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            if (onOpenRozbor) onOpenRozbor(book)
                          }}
                          className={`text-[10px] font-extrabold px-2.5 py-1 rounded-xl transition-all flex items-center gap-1 shadow-2xs border ${
                            hasRozbor(book.id)
                              ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 border-amber-400'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                          }`}
                          title="Zobrazit maturitní rozbor díla"
                        >
                          <GraduationCap className="w-3 h-3" />
                          <span>Rozbor</span>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); toggleShelf(book.id) }}
                          className={`text-[10px] font-bold px-2 py-1 rounded-lg border ${shelfIds.includes(book.id) ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50'}`}
                        >
                          {shelfIds.includes(book.id) ? 'Na poličce ✓' : 'Přidat na poličku'}
                        </button>
                        {book.isBorrowed ? (
                          <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                            Vypůjčeno
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            Dostupná
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
