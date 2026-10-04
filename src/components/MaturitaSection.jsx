import React, { useState } from 'react'
import { GraduationCap, BookOpen, CheckCircle, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

export default function MaturitaSection({ books, onSelectBook }) {
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

      {/* Categories Accordions */}
      <div className="space-y-3">
        {sections.map((sec) => {
          const sectionBooks = books.filter((b) => b.category === sec.id && b.isMaturita)
          const isOpen = openSection === sec.id

          return (
            <div key={sec.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <button
                onClick={() => toggleSection(sec.id)}
                className={`w-full p-4 text-left flex items-center justify-between transition-colors bg-gradient-to-r ${sec.color} text-white`}
              >
                <div className="pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold bg-white/20 px-2 py-0.5 rounded-full">
                      {sec.minCount}
                    </span>
                    <span className="text-xs font-bold text-amber-200">
                      ({sectionBooks.length} děl)
                    </span>
                  </div>
                  <h3 className="font-bold text-sm mt-1">{sec.title}</h3>
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
                        <div className="flex items-center gap-1 text-[10px] text-emerald-700 mt-0.5">
                          <MapPin className="w-3 h-3 text-emerald-600" />
                          <span>{book.location}</span>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
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
