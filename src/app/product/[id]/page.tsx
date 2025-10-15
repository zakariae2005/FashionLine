import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getProductById } from "@/lib/products"
import { generateWhatsAppLink } from "@/lib/whatsapp"
import { ArrowRight } from "lucide-react"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const productUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com"}/product/${product.id}`
  const whatsappLink = generateWhatsAppLink(product.name, product.price, productUrl)

  const categoryLabels = {
    men: "رجال",
    women: "نساء",
    kids: "أطفال",
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-secondary/20 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-accent transition-colors">
                الرئيسية
              </Link>
              <span>/</span>
              <Link href="/shop" className="hover:text-accent transition-colors">
                المنتجات
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/30">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                    {categoryLabels[product.category]}
                  </span>
                </div>

                <h1 className="font-serif text-4xl font-bold mb-4 text-foreground">{product.name}</h1>

                <p className="text-3xl font-bold text-accent mb-6">{product.price} درهم</p>

                <div className="mb-8">
                  <h2 className="font-semibold text-lg mb-3 text-foreground">وصف المنتج</h2>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                <div className="mb-8 p-6 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-3 text-foreground">معلومات إضافية</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• جودة عالية ومواد فاخرة</li>
                    <li>• تصميم عصري وأنيق</li>
                    <li>• مريح للاستخدام اليومي</li>
                    <li>• متوفر بمقاسات متعددة</li>
                  </ul>
                </div>

                {/* WhatsApp Button */}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <svg className="ml-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    إرسال عبر واتساب
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="w-full mt-4 border-border bg-transparent">
                  <Link href="/shop">
                    <ArrowRight className="ml-2 h-5 w-5" />
                    العودة للمنتجات
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
