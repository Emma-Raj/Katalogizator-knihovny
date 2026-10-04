import React, { useState, useMemo } from 'react'
import { Search, Filter, BookOpen, GraduationCap, MapPin, CheckCircle, XCircle, ChevronRight, X } from 'lucide-react'

export default function BookList({ books, onSelectBook }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [maturitaOnly, setMaturitaOnly] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [availabilityFilter, setAvailabilityFilter] = useState('all') // 'all', 'available', 'borrowed'

  const categories = [
    { id: 'all', label: 'Všechna období / sekce' },
    { id: 'do_18_stoleti', label: 'Do konce 18. století' },
    { id: '19_stoleti', label: '19. století' },
    { id: 'svetova_20_21', label: 'Světová 20. a 21. stol.' },
    { id: 'ceska_20_21', label: 'Česká 20. a 21. stol.' },
    { id: 'ostatni', label: 'Ostatní literatura' },
  ]

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      // Search term
      const query = searchTerm.toLowerCase().trim()
      const matchesQuery =
        !query ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query) ||
        book.barcode.toLowerCase().includes(query) ||
        book.location.toLowerCase().includes(query)

      // Maturita filter
      const matchesMaturita = !maturitaOnly || book.isMaturita

      // Category filter
      const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory

      // Availability filter
      const matchesAvailability =
        availabilityFilter === 'all' ||
        (availabilityFilter === 'available' && !book.isBorrowed) ||
        (availabilityFilter === 'borrowed' && book.isBorrowed)

      return matchesQuery && matchesMaturita && matchesCategory && matchesAvailability
    })
  }, [books, searchTerm, maturitaOnly, selectedCategory, availabilityFilter])

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto pb-24">
      {/* Search Input */}
      <div className="relative">
        <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
        <input
          type="text"
          placeholder="Hledat podle názvu, autora, žánru..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Options */}
      <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-200 space-y-2.5">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600 border-b border-slate-100 pb-2">
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-emerald-600" />
            <span>Filtrovat výsledky</span>
          </div>
          <span className="text-slate-400 font-normal">Nalezeno: {filteredBooks.length}</span>
        </div>

        {/* Maturita Quick Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setMaturitaOnly(false)}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-medium transition-all ${
              !maturitaOnly
                ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Všechny knihy
          </button>
          <button
            onClick={() => setMaturitaOnly(true)}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1 ${
              maturitaOnly
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Maturitní četba</span>
          </button>
        </div>

        {/* Category Selector */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div>
            <label className="block text-[11px] text-slate-500 mb-1">Období / Kategorie:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] text-slate-500 mb-1">Dostupnost:</label>
            <select
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="all">Všechny stav</option>
              <option value="available">Pouze dostupné</option>
              <option value="borrowed">Pouze vypůjčené</option>
            </select>
          </div>
        </div>
      </div>

      {/* Book Cards List */}
      <div className="space-y-2.5">
        {filteredBooks.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="font-semibold text-slate-700 text-sm">Žádné knihy neodpovídají filtru</p>
            <p className="text-xs text-slate-500 mt-1">Zkuste upravit nebo vymazat hledaný výraz.</p>
          </div>
        ) : (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              onClick={() => onSelectBook(book)}
              className="bg-white rounded-2xl p-3.5 shadow-sm border border-slate-200 hover:border-emerald-300 transition-all cursor-pointer active:scale-[0.99] flex items-center justify-between gap-3 group"
            >
              <div className="space-y-1.5 min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  {book.isMaturita && (
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 border border-amber-200">
                      <GraduationCap className="w-3 h-3 text-amber-600" />
                      <span>Maturita</span>
                    </span>
                  )}
                  <span className="text-[11px] text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded-md">
                    {book.genre}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-emerald-700 transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs font-medium text-slate-600 truncate">{book.author}</p>

                {/* Location Badge */}
                <div className="flex items-center gap-1 text-[11px] text-emerald-800 bg-emerald-50/80 px-2 py-1 rounded-lg border border-emerald-100 w-fit">
                  <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="font-semibold truncate">{book.location}</span>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                {book.isBorrowed ? (
                  <span className="bg-red-50 text-red-700 border border-red-200 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <XCircle className="w-3 h-3 text-red-600" />
                    <span>Vypůjčeno</span>
                  </span>
                ) : (
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Dostupná</span>
                  </span>
                )}

                <div className="p-1.5 text-slate-300 group-hover:text-emerald-600 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
