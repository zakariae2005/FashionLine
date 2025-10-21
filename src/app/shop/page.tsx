"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from 'next/image'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useProduct } from "@/hooks/product/use-product"
import { Product } from "@/types/product"

export default function ShopPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const { products, loading } = useProduct()

  const [selectedCategory, setSelectedCategory] = useState<"all" | "men" | "women" | "kids">(
    (categoryParam as "men" | "women" | "kids") || "all",
  )
  const [selectedType, setSelectedType] = useState<"all" | "shirt" | "boots">("all")
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  useEffect(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter((product) => product.type === selectedType)
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, selectedType, products])

  const categories = [
    { value: "all", label: "الكل" },
    { value: "men", label: "رجال" },
    { value: "women", label: "نساء" },
    { value: "kids", label: "أطفال" },
  ] as const

  const types = [
    { value: "all", label: "الكل" },
    { value: "boots", label: "أحذية" },
    { value: "shirt", label: "قمصان" },
  ] as const

  return (
    <div className="min-h-screen bg-stone-100" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />

      <main>
        {/* Hero Section with Image Background */}
        <section className="relative h-[400px] px-6">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image 
              src="/images/sh2.jpg" 
              alt="Shop Background" 
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative h-full max-w-7xl mx-auto flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white uppercase tracking-wide">
                المنتجات
              </h1>
              <div className="w-20 h-1 bg-white mx-auto"></div>
              <p className="text-lg text-stone-200 mt-4">اكتشف مجموعتنا الكاملة من الأزياء العصرية</p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 px-6 bg-white border-y border-stone-200">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-4 uppercase tracking-wide">الفئة</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value as "all" | "men" | "women" | "kids")}
                    className={`px-8 py-3 uppercase tracking-wide text-sm font-medium transition-all ${
                      selectedCategory === category.value
                        ? "bg-gray-900 text-white shadow-lg"
                        : "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4 uppercase tracking-wide">النوع</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {types.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setSelectedType(type.value as "all" | "shirt" | "boots")}
                    className={`px-8 py-3 uppercase tracking-wide text-sm font-medium transition-all ${
                      selectedType === type.value
                        ? "bg-gray-900 text-white shadow-lg"
                        : "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="text-gray-600 text-lg">
                عرض <span className="font-bold text-gray-900">{filteredProducts.length}</span> منتج
              </p>
            </div>
            
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                <p className="mt-4 text-gray-600">جاري التحميل...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-stone-200 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-wide">لا توجد منتجات</h3>
                  <p className="text-gray-600">لا توجد منتجات تطابق معايير البحث الخاصة بك</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-widest text-xs mb-3 text-gray-400">تخفيضات خاصة</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">اشترك في نشرتنا البريدية</h2>
            <p className="text-stone-300 mb-8">احصل على آخر العروض والتحديثات مباشرة في بريدك الإلكتروني</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني"
                className="flex-1 px-6 py-4 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button 
                type="submit"
                className="bg-white text-gray-900 px-8 py-4 hover:bg-stone-100 transition-colors uppercase tracking-wide text-sm font-medium"
              >
                اشترك
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}