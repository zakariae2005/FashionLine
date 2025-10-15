"use client"

import Link from "next/link"
import { Search, Menu, X, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <h1 className="font-serif text-3xl font-bold text-foreground hover:text-primary transition-colors">
              متجر الأزياء
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-base font-medium text-foreground hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="/shop" className="text-base font-medium text-foreground hover:text-primary transition-colors">
              المنتجات
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              اتصل بنا
            </Link>
            <Link
              href="/admin"
              className="flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              <ShieldCheck className="h-4 w-4" />
              لوحة التحكم
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mr-8">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="ابحث عن المنتجات..."
                className="pr-10 bg-secondary border-border h-11"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/shop"
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                المنتجات
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>
              <Link
                href="/admin"
                className="flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShieldCheck className="h-4 w-4" />
                لوحة التحكم
              </Link>
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="ابحث عن المنتجات..."
                  className="pr-10 bg-secondary border-border"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
