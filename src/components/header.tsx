"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold tracking-wider text-gray-900">
            AYOUB FASHION
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide">الرئيسية</Link>
            <Link href="/products?category=men" className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide">أحذية</Link>
            <Link href="/products?category=women" className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide">قمصان</Link>
            <Link href="/shop" className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide">عروض</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide">تواصل معنا</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-stone-200 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide text-right py-2"
                onClick={closeMenu}
              >
                الرئيسية
              </Link>
              <Link 
                href="/products?category=men" 
                className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide text-right py-2"
                onClick={closeMenu}
              >
                أحذية
              </Link>
              <Link 
                href="/products?category=women" 
                className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide text-right py-2"
                onClick={closeMenu}
              >
                قمصان
              </Link>
              <Link 
                href="/shop" 
                className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide text-right py-2"
                onClick={closeMenu}
              >
                عروض
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide text-right py-2"
                onClick={closeMenu}
              >
                تواصل معنا
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}