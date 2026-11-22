import React from 'react'
import { BookOpen, GraduationCap, Search, ScanLine, BookmarkCheck, LibraryBig, Users } from 'lucide-react'

export default function WelcomeScreen({ onSelectProfile }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-green-100 flex items-center justify-center p-5 font-sans">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 text-white shadow-lg mb-4">
            <LibraryBig className="w-8 h-8" />
          </div>
          <p className="text-xs uppercase tracking-[0.22em] font-bold text-slate-600 mb-2">Katalog knih a maturitní četba</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Vítejte v knihovně!</h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-lg mx-auto">Najděte si knihu, prozkoumejte katalog, spravujte výpůjčky nebo se připravte na maturitu. Vyberte si prostředí podle toho, co právě potřebujete.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <button type="button" onClick={() => onSelectProfile('maturita')} className="group text-left bg-white rounded-3xl p-6 border-2 border-violet-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-violet-400 transition-all focus:outline-none focus:ring-4 focus:ring-violet-200">
            <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-800 flex items-center justify-center mb-4 group-hover:bg-violet-200 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-extrabold text-slate-900">Maturitní profil</h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">Maturitní seznam BMA, přehled literárních období, rozbory děl a vlastní seznam přečtených či vybraných knih.</p>
            <span className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-violet-800">Přejít k maturitě <span aria-hidden="true">→</span></span>
          </button>

          <button type="button" onClick={() => onSelectProfile('ctenar')} className="group text-left bg-white rounded-3xl p-6 border-2 border-green-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-green-400 transition-all focus:outline-none focus:ring-4 focus:ring-green-200">
            <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-800 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-extrabold text-slate-900">Běžný čtenář</h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">Procházení a vyhledávání knih, skenování ISBN, přehled dostupnosti a výpůjček i vlastní správa knih.</p>
            <div className="flex flex-wrap gap-2 mt-4 text-[11px] font-semibold text-green-800">
              <span className="inline-flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full"><Search className="w-3 h-3"/> Hledání</span>
              <span className="inline-flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full"><ScanLine className="w-3 h-3"/> ISBN</span>
              <span className="inline-flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full"><BookmarkCheck className="w-3 h-3"/> Výpůjčky</span>
            </div>
            <span className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-green-800">Otevřít katalog <span aria-hidden="true">→</span></span>
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-slate-800">
            <Users className="w-4 h-4" /> Pro všechny čtenáře
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mt-2">Aplikace vznikla pro studenty a učitele Beskydy Mountain Academy, ale využít ji může každý. Katalog a jeho funkce jsou otevřené všem; maturitní část navíc obsahuje výběr četby a přípravu přizpůsobenou požadavkům BMA.</p>
        </div>
        <p className="text-center text-xs text-slate-500 mt-5">Katalog knihovny · školní projekt BMA</p>
      </div>
    </main>
  )
}
