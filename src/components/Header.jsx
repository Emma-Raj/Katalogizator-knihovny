import React from 'react'
import { BookOpen, QrCode } from 'lucide-react'

export default function Header({ activeTab, setActiveTab, selectedProfile }) {
  const isMaturant = selectedProfile === 'maturita'
  return (
    <header className={`${isMaturant ? "bg-emerald-800" : "bg-amber-900"} text-white shadow-md sticky top-0 z-30`}>
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('catalog')}>
          <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
            <BookOpen className={`w-6 h-6 ${isMaturant ? "text-emerald-200" : "text-amber-200"}`} />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-wide">Knihovna GYM</h1>
            <p className={`text-xs ${isMaturant ? "text-emerald-200" : "text-amber-200"}`}>{isMaturant ? "Maturitní příprava 2026/2027" : "Katalog knihovny 2026/2027"}</p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('scan')}
          className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all shadow-sm ${
            activeTab === 'scan'
              ? 'bg-amber-300 text-slate-950 font-bold shadow'
              : isMaturant ? 'bg-emerald-700 hover:bg-emerald-600 text-white' : 'bg-amber-800 hover:bg-amber-700 text-white'
          }`}
        >
          <QrCode className="w-4 h-4" />
          <span>Skenovat</span>
        </button>
      </div>
    </header>
  )
}
