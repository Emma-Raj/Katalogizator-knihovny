import React from 'react'
import { BookOpen, GraduationCap, Search, ScanLine, BookmarkCheck, LibraryBig } from 'lucide-react'

export default function WelcomeScreen({ onSelectProfile }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-emerald-50 to-amber-50 flex items-center justify-center p-5 font-sans">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-700 text-white shadow-lg mb-4">
            <LibraryBig className="w-8 h-8" />
          </div>
          <p className="text-xs uppercase tracking-[0.22em] font-bold text-emerald-700 mb-2">Beskydy Mountain Academy</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Vítejte v naší knihovně!</h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-lg mx-auto">Katalogizátor knihovny BMA vám pomůže najít knihy, zorientovat se v katalogu nebo připravit se na maturitu. Vyberte si, co právě hledáte.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <button type="button" onClick={() => onSelectProfile('maturita')} className="group text-left bg-white rounded-3xl p-6 border border-amber-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-amber-200">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-extrabold text-slate-900">Maturant BMA</h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">Seznam maturitní četby, filtrování podle literárních období a dostupné rozbory děl.</p>
            <span className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-amber-800">Přejít k maturitě <span aria-hidden="true">→</span></span>
          </button>

          <button type="button" onClick={() => onSelectProfile('ctenar')} className="group text-left bg-white rounded-3xl p-6 border border-emerald-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-extrabold text-slate-900">Běžný čtenář</h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">Procházení a vyhledávání knih, skenování ISBN, informace o dostupnosti a výpůjčkách.</p>
            <div className="flex flex-wrap gap-2 mt-4 text-[11px] font-semibold text-emerald-800">
              <span className="inline-flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-full"><Search className="w-3 h-3"/> Hledání</span>
              <span className="inline-flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-full"><ScanLine className="w-3 h-3"/> ISBN</span>
              <span className="inline-flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-full"><BookmarkCheck className="w-3 h-3"/> Výpůjčky</span>
            </div>
            <span className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-emerald-800">Otevřít katalog <span aria-hidden="true">→</span></span>
          </button>
        </div>
        <p className="text-center text-xs text-slate-500 mt-6">Katalogizátor knihovny BMA · školní projekt</p>
      </div>
    </main>
  )
}
