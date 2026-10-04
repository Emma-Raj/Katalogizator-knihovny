import React from 'react'
import { BookOpen, QrCode } from 'lucide-react'

export default function Header({ activeTab, setActiveTab }) {
  return (
    <header className="bg-emerald-700 text-white shadow-md sticky top-0 z-30">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('catalog')}>
          <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
            <BookOpen className="w-6 h-6 text-emerald-200" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-wide">Knihovna GYM</h1>
            <p className="text-xs text-emerald-200">Katalog & Lokalizátor 2026/2027</p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('scan')}
          className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all shadow-sm ${
            activeTab === 'scan'
              ? 'bg-amber-400 text-emerald-950 font-bold shadow'
              : 'bg-emerald-600 hover:bg-emerald-5-00 text-white'
          }`}
        >
          <QrCode className="w-4 h-4" />
          <span>Skenovat</span>
        </button>
      </div>
    </header>
  )
}
