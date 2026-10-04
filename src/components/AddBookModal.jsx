import React, { useState } from 'react'
import { PlusCircle, Barcode, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react'

export default function AddBookModal({ onAddBook }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('Román')
  const [category, setCategory] = useState('ceska_20_21')
  const [isMaturita, setIsMaturita] = useState(true)
  const [barcode, setBarcode] = useState(() => `859${Math.floor(100000000 + Math.random() * 900000000)}`)
  const [location, setLocation] = useState('Sekce D (Maturita) – Regál 1, Police 1')
  const [description, setDescription] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const categories = [
    { id: 'do_18_stoleti', label: 'Světová a česká literatura do konce 18. století' },
    { id: '19_stoleti', label: 'Světová a česká literatura 19. století' },
    { id: 'svetova_20_21', label: 'Světová literatura 20. a 21. století' },
    { id: 'ceska_20_21', label: 'Česká literatura 20. a 21. století' },
    { id: 'ostatni', label: 'Ostatní literatura' },
  ]

  const generateRandomBarcode = () => {
    setBarcode(`859${Math.floor(100000000 + Math.random() * 900000000)}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !author.trim() || !barcode.trim() || !location.trim()) return

    const selectedCatObj = categories.find((c) => c.id === category)

    const newBook = {
      id: `book-custom-${Date.now()}`,
      title: title.trim(),
      author: author.trim(),
      genre: genre.trim() || 'Beletrie',
      category: category,
      categoryName: selectedCatObj ? selectedCatObj.label : 'Ostatní literatura',
      isMaturita: category !== 'ostatni' ? isMaturita : false,
      barcode: barcode.trim(),
      location: location.trim(),
      description: description.trim() || `Školní výtisk díla ${title.trim()} od autora ${author.trim()}.`,
      isBorrowed: false,
      borrowedTo: '',
      borrowedDate: '',
    }

    onAddBook(newBook)
    setSuccessMsg(`Kniha "${newBook.title}" byla úspěšně přidána do katalogu!`)

    // Reset form
    setTitle('')
    setAuthor('')
    setDescription('')
    generateRandomBarcode()
    setTimeout(() => setSuccessMsg(''), 4000)
  }

  return (
    <div className="p-4 max-w-md mx-auto space-y-4 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white rounded-2xl p-4 shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2.5 rounded-xl">
            <PlusCircle className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Přidat novou knihu</h2>
            <p className="text-xs text-emerald-100">Registrace nové knihy do školního katalogu</p>
          </div>
        </div>
      </div>

      {successMsg && (
        <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 p-3 rounded-2xl text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Název knihy *</label>
          <input
            type="text"
            required
            placeholder="Napr. R.U.R."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Autor *</label>
          <input
            type="text"
            required
            placeholder="Napr. Karel Čapek"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Žánr</label>
            <input
              type="text"
              placeholder="Napr. Drama, Román"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Kategorie / Období</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-2 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Maturita Checkbox */}
        {category !== 'ostatni' && (
          <div className="flex items-center gap-2 bg-amber-50 p-2.5 rounded-xl border border-amber-200">
            <input
              type="checkbox"
              id="maturitaCheck"
              checked={isMaturita}
              onChange={(e) => setIsMaturita(e.target.checked)}
              className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
            />
            <label htmlFor="maturitaCheck" className="text-xs font-bold text-amber-900 flex items-center gap-1 cursor-pointer">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>Součást školního maturitního seznamu</span>
            </label>
          </div>
        )}

        {/* Location (Lokalizátor) */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Lokalizace v knihovně (Umístění) *</span>
          </label>
          <input
            type="text"
            required
            placeholder="Napr. Sekce D (Maturita) – Regál 2, Police 3"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Barcode */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
            <Barcode className="w-3.5 h-3.5 text-slate-600" />
            <span>Čárkový kód *</span>
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              required
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
              className="flex-1 px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="button"
              onClick={generateRandomBarcode}
              className="px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl border border-slate-300 shrink-0"
            >
              Generovat
            </button>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Stručný popis</label>
          <textarea
            rows="2"
            placeholder="Doplňující informace o knize..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow transition-all active:scale-98 text-xs flex items-center justify-center gap-2"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Uložit knihu do databáze</span>
        </button>
      </form>
    </div>
  )
}
