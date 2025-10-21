"use client"

import { useEffect, useState } from "react"
import { notFound, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Loader2 } from "lucide-react"
import { Product } from "@/types/product"
import { productService } from "@/lib/services/product.service"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ProductPage() {
  const params = useParams()
  const id = params?.id as string
  
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFoundState, setNotFoundState] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return
      
      try {
        setLoading(true)
        const data = await productService.getById(id)
        setProduct(data)
      } catch (error) {
        console.error("Error fetching product:", error)
        setNotFoundState(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const generateWhatsAppLink = (name: string, price: number, productUrl: string) => {
    const message = `مرحباً، أنا مهتم بهذا المنتج:\n\n${name}\nالسعر: ${price} درهم\n\nرابط المنتج: ${productUrl}`
    return `https://wa.me/212600000000?text=${encodeURIComponent(message)}`
  }

  const categoryLabels = {
    men: "رجال",
    women: "نساء",
    kids: "أطفال",
  }

  const typeLabels = {
    shirt: "قميص",
    boots: "حذاء",
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-100 flex flex-col" style={{ fontFamily: 'Arial, sans-serif' }}>
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-gray-900" />
        </main>
        <Footer />
      </div>
    )
  }

  if (notFoundState || !product) {
    notFound()
  }

  const productUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com"}/product/${product.id}`
  const whatsappLink = generateWhatsAppLink(product.name, product.price, productUrl)
  const allImages = product.images && product.images.length > 0 ? product.images : [product.image]

  return (
    <div className="min-h-screen bg-stone-100" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />

      <main>
        {/* Breadcrumb */}
        <section className="bg-white py-4 px-6 border-b border-stone-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 transition-colors uppercase tracking-wide">
                الرئيسية
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-gray-900 transition-colors uppercase tracking-wide">
                المنتجات
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Product Images */}
              <div className="space-y-6">
                {/* Main Image */}
                <div className="relative aspect-square bg-white overflow-hidden group">
                  <Image
                    src={allImages[selectedImage] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/5 transition-colors"></div>
                </div>

                {/* Thumbnail Images */}
                {allImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {allImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-square bg-white overflow-hidden transition-all ${
                          selectedImage === index 
                            ? 'ring-2 ring-gray-900 ring-offset-2' 
                            : 'hover:opacity-75'
                        }`}
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${product.name} - صورة ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <div className="mb-6 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium uppercase tracking-wide">
                    {categoryLabels[product.category as keyof typeof categoryLabels]}
                  </span>
                  <span className="px-3 py-1 bg-gray-900/90 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wide">
                    {typeLabels[product.type as keyof typeof typeLabels]}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 uppercase tracking-wide leading-tight">
                  {product.name}
                </h1>

                <div className="mb-8">
                  <p className="text-4xl font-bold text-gray-900">{product.price} درهم</p>
                </div>

                <div className="mb-10">
                  <h2 className="font-medium text-sm mb-4 text-gray-900 uppercase tracking-wide">وصف المنتج</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
                </div>

                <div className="mb-10 bg-white p-8">
                  <h3 className="font-medium text-sm mb-6 text-gray-900 uppercase tracking-wide">معلومات إضافية</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold">•</span>
                      <span>جودة عالية ومواد فاخرة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold">•</span>
                      <span>تصميم عصري وأنيق</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold">•</span>
                      <span>مريح للاستخدام اليومي</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold">•</span>
                      <span>متوفر بمقاسات متعددة</span>
                    </li>
                  </ul>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-900 text-white px-10 py-5 hover:bg-gray-800 transition-all uppercase tracking-wide text-sm font-medium text-center shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300 mb-4"
                >
                  <span className="flex items-center justify-center gap-3">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>إرسال عبر واتساب</span>
                  </span>
                </a>

                <Link
                  href="/products"
                  className="w-full bg-white text-gray-900 px-10 py-5 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all uppercase tracking-wide text-sm font-medium text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    <span>العودة للمنتجات</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 border-y border-stone-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-stone-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 mb-2 uppercase text-sm tracking-wide">ضمان الجودة</h3>
                <p className="text-gray-600 text-sm">منتجات أصلية 100%</p>
              </div>
              
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-stone-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 mb-2 uppercase text-sm tracking-wide">دفع آمن</h3>
                <p className="text-gray-600 text-sm">معاملات مشفرة</p>
              </div>
              
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-stone-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 mb-2 uppercase text-sm tracking-wide">توصيل سريع</h3>
                <p className="text-gray-600 text-sm">شحن لجميع المدن</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="py-20 px-6 bg-stone-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 uppercase tracking-wide">منتجات ذات صلة</h2>
              <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
            </div>
            {/* You can add related products here */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}