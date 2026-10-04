import React from 'react'
import { BookOpen, QrCode, GraduationCap, BookmarkCheck, PlusCircle } from 'lucide-react'

export default function Navigation({ activeTab, setActiveTab, borrowedCount }) {
  const navItems = [
    { id: 'catalog', label: 'Katalog', icon: BookOpen },
    { id: 'maturita', label: 'Maturita', icon: GraduationCap },
    { id: 'scan', label: 'Skenovat', icon: QrCode, highlight: true },
    { id: 'borrowed', label: 'Výpůjčky', icon: BookmarkCheck, badge: borrowedCount },
    { id: 'add', label: 'Přidat', icon: PlusCircle },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 pb-safe shadow-lg">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          if (item.highlight) {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="flex flex-col items-center justify-center -mt-5"
              >
                <div
                  className={`w-13 h-13 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${
                    isActive
                      ? 'bg-amber-500 text-slate-900 ring-4 ring-amber-200'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-[11px] font-medium mt-1 ${isActive ? 'text-amber-600 font-bold' : 'text-slate-600'}`}>
                  {item.label}
                </span>
              </button>
            )
          }

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 relative transition-colors ${
                isActive ? 'text-emerald-700 font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.25]' : 'stroke-2'}`} />
                {item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 bg-amber-500 text-slate-950 text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-1 tracking-tight">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
