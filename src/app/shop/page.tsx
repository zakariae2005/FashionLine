"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products, type Product } from "@/lib/products"

export default function ShopPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [selectedCategory, setSelectedCategory] = useState<"all" | "men" | "women" | "kids">(
    (categoryParam as "men" | "women" | "kids") || "all",
  )
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory))
    }
  }, [selectedCategory])

  const categories = [
    { value: "all", label: "الكل" },
    { value: "men", label: "رجال" },
    { value: "women", label: "نساء" },
    { value: "kids", label: "أطفال" },
  ] as const

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-6xl font-bold text-center text-foreground mb-4">المنتجات</h1>
            <p className="text-center text-muted-foreground text-xl">اكتشف مجموعتنا الكاملة من الأزياء العصرية</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-10 border-b border-border bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="lg"
                  onClick={() => setSelectedCategory(category.value as "all" | "men" | "women" | "kids")}
                  className={
                    selectedCategory === category.value
                      ? "shadow-md"
                      : "border-2 border-border hover:border-primary hover:text-primary"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <p className="text-muted-foreground text-lg">عرض {filteredProducts.length} منتج</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-xl">لا توجد منتجات في هذه الفئة</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
