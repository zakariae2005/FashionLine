"use client"

import Link from "next/link"


export function Header() {

  return (
    <header className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold tracking-wider text-gray-900">
              AYOUB FASHION
            </div>
            <nav className="hidden md:flex gap-8 text-sm">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide">الرئيسية</Link>
              <Link href="/products?category=men" className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide">أحذية</Link>
              <Link href="/products?category=women" className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide">قمصان</Link>
              <Link href="/shop" className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide">عروض</Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors uppercase tracking-wide">تواصل معنا</Link>
            </nav>
            <div className="flex items-center gap-4">
              
            </div>
          </div>
        </div>
      </header>
  )
}
