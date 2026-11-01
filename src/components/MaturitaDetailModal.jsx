import React, { useState } from 'react'
import {
  X,
  GraduationCap,
  BookOpen,
  Feather,
  Clock,
  Compass,
  Users,
  MessageSquare,
  FileText,
  History,
  ExternalLink,
  Info,
  ChevronDown,
  ChevronUp,
  AlertCircle
} from 'lucide-react'
import { getRozborByBookId } from '../data/maturitaRozbory'

export default function MaturitaDetailModal({ book, onClose }) {
  if (!book) return null

  const rozbor = getRozborByBookId(book.id)

  // Accordion state to collapse/expand sections easily on mobile
  const [openSections, setOpenSections] = useState({
    general: true,
    theme: true,
    composition: false,
    characters: true,
    narrator: false,
    summary: true,
    context: true,
    sources: true,
  })

  const toggleSection = (sec) => {
    setOpenSections((prev) => ({
      ...prev,
      [sec]: !prev[sec],
    }))
  }

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 transition-all">
      <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-200">

        {/* Header Bar */}
        <div className="p-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 flex items-center justify-between shrink-0 shadow-xs">
          <div className="flex items-center gap-2.5">
            <div className="bg-white/30 p-2 rounded-xl">
              <GraduationCap className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="font-extrabold text-sm block leading-tight">Maturitní rozbor díla</span>
              <span className="text-[11px] font-medium text-amber-950">Český jazyk a literatura</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/10 text-slate-900 transition-colors"
            aria-label="Zavřít rozbor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-slate-800 text-xs">

          {/* Book Header Card */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                Maturitní četba
              </span>
              <span className="text-[11px] text-slate-600 font-medium">
                {book.categoryName || book.genre}
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 leading-tight">
              {rozbor?.title || book.title}
            </h2>
            <p className="text-sm font-bold text-amber-900 mt-0.5">
              {rozbor?.author || book.author}
            </p>
          </div>

          {/* Case: No Rozbor Available yet */}
          {!rozbor && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto text-amber-700">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm">Rozbor zatím není dostupný</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Pro knihu <strong className="text-slate-700">„{book.title}“</strong> zatím nebyl do aplikace vložen strukturovaný maturitní rozbor.
                </p>
              </div>
              <div className="bg-white border border-slate-200 p-3 rounded-xl text-left text-[11px] space-y-1.5 text-slate-600">
                <p className="font-semibold text-slate-700">Jak rozbor doplnit?</p>
                <p>
                  Rozbory lze jednoduše vložit do datového modulu <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">src/data/maturitaRozbory.js</code> pod identifikačním kódem této knihy: <span className="font-mono font-bold text-amber-800">{book.id}</span>.
                </p>
              </div>
            </div>
          )}

          {/* Case: Rozbor is Available */}
          {rozbor && (
            <div className="space-y-3">

              {/* 1. Základní informace o díle (druh, žánr, forma, časoprostor) */}
              {rozbor.generalInfo && (
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
                  <button
                    onClick={() => toggleSection('general')}
                    className="w-full p-3.5 bg-slate-50 hover:bg-slate-100 text-left flex items-center justify-between font-bold text-slate-800 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-emerald-700" />
                      <span>Základní informace o díle</span>
                    </div>
                    {openSections.general ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>

                  {openSections.general && (
                    <div className="p-3.5 space-y-2 border-t border-slate-100 bg-white">
                      {rozbor.generalInfo.literaryKind && (
                        <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                          <span className="text-slate-500 font-medium">Literární druh:</span>
                          <span className="font-bold text-slate-800 text-right">{rozbor.generalInfo.literaryKind}</span>
                        </div>
                      )}
                      {rozbor.generalInfo.literaryGenre && (
                        <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                          <span className="text-slate-500 font-medium">Literární žánr:</span>
                          <span className="font-bold text-slate-800 text-right">{rozbor.generalInfo.literaryGenre}</span>
                        </div>
                      )}
                      {rozbor.generalInfo.literaryForm && (
                        <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5">
                          <span className="text-slate-500 font-medium">Literární forma:</span>
                          <span className="font-bold text-slate-800 text-right">{rozbor.generalInfo.literaryForm}</span>
                        </div>
                      )}
                      {rozbor.generalInfo.timeAndSpace && (
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-slate-500 font-medium">Časoprostor:</span>
                          <span className="font-semibold text-slate-800 text-right">{rozbor.generalInfo.timeAndSpace}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 2. Téma a motivy */}
              {rozbor.themeAndMotifs && (
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
                  <button
                    onClick={() => toggleSection('theme')}
                    className="w-full p-3.5 bg-slate-50 hover:bg-slate-100 text-left flex items-center justify-between font-bold text-slate-800 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-emerald-700" />
                      <span>Téma, motivy a hlavní myšlenka</span>
                    </div>
                    {openSections.theme ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>

                  {openSections.theme && (
                    <div className="p-3.5 space-y-2.5 border-t border-slate-100 bg-white">
                      {rozbor.themeAndMotifs.theme && (
                        <div>
                          <span className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                            Hlavní téma / myšlenka:
                          </span>
                          <p className="text-slate-700 leading-relaxed bg-amber-50/50 p-2.5 rounded-xl border border-amber-100 font-medium">
                            {rozbor.themeAndMotifs.theme}
                          </p>
                        </div>
                      )}
                      {rozbor.themeAndMotifs.motifs && (
                        <div>
                          <span className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                            Motivy:
                          </span>
                          <p className="text-slate-700 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            {rozbor.themeAndMotifs.motifs}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 3. Kompozice */}
              {rozbor.composition && (
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
                  <button
                    onClick={() => toggleSection('composition')}
                    className="w-full p-3.5 bg-slate-50 hover:bg-slate-100 text-left flex items-center justify-between font-bold text-slate-800 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-700" />
                      <span>Kompozice a výstavba děje</span>
                    </div>
                    {openSections.composition ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>

                  {openSections.composition && (
                    <div className="p-3.5 space-y-2 border-t border-slate-100 bg-white">
                      {rozbor.composition.structure && (
                        <div>
                          <span className="text-slate-500 font-medium block mb-0.5">Vnitřní a vnější členění:</span>
                          <p className="font-semibold text-slate-800">{rozbor.composition.structure}</p>
                        </div>
                      )}
                      {rozbor.composition.timeline && (
                        <div className="pt-1.5 border-t border-slate-100">
                          <span className="text-slate-500 font-medium block mb-0.5">Časová posloupnost:</span>
                          <p className="font-semibold text-slate-800">{rozbor.composition.timeline}</p>
                        </div>
                      )}
                      {rozbor.composition.dramaticStructure && (
                        <div className="pt-1.5 border-t border-slate-100">
                          <span className="text-slate-500 font-medium block mb-0.5">Dramatická výstavba:</span>
                          <p className="text-slate-700 leading-relaxed text-[11px] bg-slate-50 p-2 rounded-xl">
                            {rozbor.composition.dramaticStructure}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 4. Postavy */}
              {rozbor.characters && rozbor.characters.length > 0 && (
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
                  <button
                    onClick={() => toggleSection('characters')}
                    className="w-full p-3.5 bg-slate-50 hover:bg-slate-100 text-left flex items-center justify-between font-bold text-slate-800 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-700" />
                      <span>Charakteristika hlavních postav</span>
                    </div>
                    {openSections.characters ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>

                  {openSections.characters && (
                    <div className="p-3.5 space-y-2.5 border-t border-slate-100 bg-white">
                      {rozbor.characters.map((char, idx) => (
                        <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold text-slate-900 text-xs">{char.name}</span>
                            {char.role && (
                              <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                                {char.role}
                              </span>
                            )}
                          </div>
                          <p className="text-slate-600 text-[11px] leading-relaxed">
                            {char.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 5. Vypravěč, jazykové prostředky a styl */}
              {rozbor.narratorAndStyle && (
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
                  <button
                    onClick={() => toggleSection('narrator')}
                    className="w-full p-3.5 bg-slate-50 hover:bg-slate-100 text-left flex items-center justify-between font-bold text-slate-800 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-700" />
                      <span>Vypravěč, jazykové prostředky a styl</span>
                    </div>
                    {openSections.narrator ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>

                  {openSections.narrator && (
                    <div className="p-3.5 space-y-2.5 border-t border-slate-100 bg-white">
                      {rozbor.narratorAndStyle.narrativeMethod && (
                        <div>
                          <span className="text-slate-500 font-medium block mb-0.5">Vypravěč / způsob vyprávění:</span>
                          <p className="font-semibold text-slate-800">{rozbor.narratorAndStyle.narrativeMethod}</p>
                        </div>
                      )}
                      {rozbor.narratorAndStyle.languageCharacteristics && (
                        <div className="pt-1.5 border-t border-slate-100">
                          <span className="text-slate-500 font-medium block mb-0.5">Jazykové prostředky a styl:</span>
                          <p className="text-slate-700 leading-relaxed text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            {rozbor.narratorAndStyle.languageCharacteristics}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 6. Stručný děj / obsah */}
              {rozbor.summary && (
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
                  <button
                    onClick={() => toggleSection('summary')}
                    className="w-full p-3.5 bg-slate-50 hover:bg-slate-100 text-left flex items-center justify-between font-bold text-slate-800 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-emerald-700" />
                      <span>Stručný obsah / děj díla</span>
                    </div>
                    {openSections.summary ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>

                  {openSections.summary && (
                    <div className="p-3.5 border-t border-slate-100 bg-white">
                      <p className="text-slate-700 leading-relaxed whitespace-pre-line text-xs bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                        {rozbor.summary}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 7. Literárněhistorický kontext a autor */}
              {rozbor.historicalContext && (
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
                  <button
                    onClick={() => toggleSection('context')}
                    className="w-full p-3.5 bg-slate-50 hover:bg-slate-100 text-left flex items-center justify-between font-bold text-slate-800 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <History className="w-4 h-4 text-emerald-700" />
                      <span>Literárněhistorický kontext a autor</span>
                    </div>
                    {openSections.context ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>

                  {openSections.context && (
                    <div className="p-3.5 space-y-2.5 border-t border-slate-100 bg-white">
                      {rozbor.historicalContext.literaryContext && (
                        <div>
                          <span className="text-slate-500 font-medium block mb-0.5">Literární kontext a směr:</span>
                          <p className="font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            {rozbor.historicalContext.literaryContext}
                          </p>
                        </div>
                      )}
                      {rozbor.historicalContext.authorContext && (
                        <div className="pt-1 border-t border-slate-100">
                          <span className="text-slate-500 font-medium block mb-0.5">Kontext autorovy tvorby:</span>
                          <p className="text-slate-700 leading-relaxed text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            {rozbor.historicalContext.authorContext}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 8. Použité zdroje */}
              {rozbor.sources && rozbor.sources.length > 0 && (
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs bg-white">
                  <button
                    onClick={() => toggleSection('sources')}
                    className="w-full p-3.5 bg-slate-50 hover:bg-slate-100 text-left flex items-center justify-between font-bold text-slate-800 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-amber-600" />
                      <span>Doporučené a použité zdroje rozboru</span>
                    </div>
                    {openSections.sources ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>

                  {openSections.sources && (
                    <div className="p-3.5 space-y-2 border-t border-slate-100 bg-white">
                      {rozbor.sources.map((src, i) => (
                        <a
                          key={i}
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-amber-50/50 hover:bg-amber-100/60 border border-amber-200 transition-colors text-amber-900 font-medium"
                        >
                          <span className="truncate">{src.name || src.url}</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0 text-amber-700" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

        </div>

        {/* Footer Close Button */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 shrink-0">
          <button
            onClick={onClose}
            className="w-full bg-white hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl border border-slate-300 text-xs transition-all"
          >
            Zavřít rozbor
          </button>
        </div>

      </div>
    </div>
  )
}
