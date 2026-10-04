import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import BookList from './components/BookList'
import Scanner from './components/Scanner'
import MaturitaSection from './components/MaturitaSection'
import BorrowedList from './components/BorrowedList'
import AddBookModal from './components/AddBookModal'
import BookDetailModal from './components/BookDetailModal'
import { initialBooks } from './data/books'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const LOCAL_STORAGE_KEY = 'skolni_knihovna_books_v1'

export default function App() {
  const [books, setBooks] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (saved) {
        return JSON.parse(saved)
      }
    } catch (e) {
      console.error('Chyba při načítání LocalStorage:', e)
    }
    return initialBooks
  })

  const [activeTab, setActiveTab] = useState('catalog')
  const [selectedBook, setSelectedBook] = useState(null)
  const [toastMessage, setToastMessage] = useState(null)

  // Sync books with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books))
    } catch (e) {
      console.error('Chyba při ukládání do LocalStorage:', e)
    }
  }, [books])

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type })
    setTimeout(() => setToastMessage(null), 4000)
  }

  // Handle scanned barcode
  const handleScanSuccess = (barcode) => {
    const matchedBook = books.find(
      (b) => b.barcode.trim() === barcode.trim()
    )

    if (matchedBook) {
      setSelectedBook(matchedBook)
      showToast(`Kniha nalezena: "${matchedBook.title}"`, 'success')
    } else {
      showToast(`Kniha s čárkovým kódem "${barcode}" nebyla v databázi nalezena.`, 'error')
    }
  }

  // Handle Borrow
  const handleBorrowBook = (bookId, borrowerName) => {
    setBooks((prev) =>
      prev.map((b) => {
        if (b.id === bookId) {
          return {
            ...b,
            isBorrowed: true,
            borrowedTo: borrowerName,
            borrowedDate: new Date().toLocaleDateString('cs-CZ'),
          }
        }
        return b
      })
    )

    // Update selected book in modal
    if (selectedBook && selectedBook.id === bookId) {
      setSelectedBook((prev) => ({
        ...prev,
        isBorrowed: true,
        borrowedTo: borrowerName,
        borrowedDate: new Date().toLocaleDateString('cs-CZ'),
      }))
    }
  }

  // Handle Add Book
  const handleAddBook = (newBook) => {
    setBooks((prev) => [newBook, ...prev])
    showToast(`Kniha "${newBook.title}" byla přidána do databáze!`, 'success')
  }

  const borrowedCount = books.filter((b) => b.isBorrowed).length

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Mobile container wrapper */}
      <div className="w-full max-w-md mx-auto min-h-screen bg-slate-50 flex flex-col shadow-xl relative border-x border-slate-200">

        {/* Header */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Toast alert */}
        {toastMessage && (
          <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md px-3 animate-in fade-in slide-in-from-top duration-200">
            <div
              className={`p-3.5 rounded-2xl shadow-xl border text-xs font-semibold flex items-center gap-2.5 ${
                toastMessage.type === 'success'
                  ? 'bg-emerald-900 text-white border-emerald-700'
                  : 'bg-red-900 text-white border-red-700'
              }`}
            >
              {toastMessage.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-300 shrink-0" />
              )}
              <span className="flex-1">{toastMessage.message}</span>
            </div>
          </div>
        )}

        {/* Main Content Body */}
        <main className="flex-1 overflow-y-auto">
          {activeTab === 'catalog' && (
            <BookList books={books} onSelectBook={(b) => setSelectedBook(b)} />
          )}

          {activeTab === 'maturita' && (
            <MaturitaSection books={books} onSelectBook={(b) => setSelectedBook(b)} />
          )}

          {activeTab === 'scan' && (
            <Scanner onScanSuccess={handleScanSuccess} books={books} />
          )}

          {activeTab === 'borrowed' && (
            <BorrowedList books={books} onSelectBook={(b) => setSelectedBook(b)} />
          )}

          {activeTab === 'add' && (
            <AddBookModal onAddBook={handleAddBook} />
          )}
        </main>

        {/* Book Detail Modal */}
        {selectedBook && (
          <BookDetailModal
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
            onBorrowBook={handleBorrowBook}
          />
        )}

        {/* Bottom Navigation */}
        <Navigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          borrowedCount={borrowedCount}
        />
      </div>
    </div>
  )
}
