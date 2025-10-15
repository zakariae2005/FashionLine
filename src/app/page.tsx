import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { ArrowLeft, Sparkles, Shield, Truck } from "lucide-react"

export default function HomePage() {
  const featuredProducts = products.slice(0, 6)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[700px] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center py-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>مجموعة جديدة 2024</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 text-balance text-foreground leading-tight">
              أناقة لا تُضاهى
              <br />
              <span className="text-primary">لكل المناسبات</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
              اكتشف مجموعتنا الحصرية من الأزياء العصرية التي تجمع بين الأناقة والراحة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-10 h-14 shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/shop">
                  تسوق الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 h-14 border-2 bg-transparent">
                <Link href="/contact">تواصل معنا</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">توصيل سريع</h3>
                <p className="text-muted-foreground leading-relaxed">نوصل طلبك إلى باب منزلك بسرعة وأمان</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">جودة مضمونة</h3>
                <p className="text-muted-foreground leading-relaxed">منتجات عالية الجودة مع ضمان الاستبدال</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">تصاميم حصرية</h3>
                <p className="text-muted-foreground leading-relaxed">أحدث صيحات الموضة العالمية</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-5xl font-bold text-center mb-4 text-foreground">تسوق حسب الفئة</h2>
            <p className="text-center text-muted-foreground text-lg mb-16">اختر الفئة المناسبة لك</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="/shop?category=men"
                className="group relative h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 hover:shadow-2xl transition-all duration-300 border border-border"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 right-0 left-0 p-10">
                  <h3 className="font-serif text-4xl font-bold text-white mb-3">رجال</h3>
                  <p className="text-white/95 text-lg">أزياء رجالية عصرية</p>
                  <div className="mt-4 inline-flex items-center text-white font-medium">
                    <span>تسوق الآن</span>
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link
                href="/shop?category=women"
                className="group relative h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 hover:shadow-2xl transition-all duration-300 border border-border"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 right-0 left-0 p-10">
                  <h3 className="font-serif text-4xl font-bold text-white mb-3">نساء</h3>
                  <p className="text-white/95 text-lg">أزياء نسائية راقية</p>
                  <div className="mt-4 inline-flex items-center text-white font-medium">
                    <span>تسوق الآن</span>
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link
                href="/shop?category=kids"
                className="group relative h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 hover:shadow-2xl transition-all duration-300 border border-border"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 right-0 left-0 p-10">
                  <h3 className="font-serif text-4xl font-bold text-white mb-3">أطفال</h3>
                  <p className="text-white/95 text-lg">ملابس أطفال مريحة</p>
                  <div className="mt-4 inline-flex items-center text-white font-medium">
                    <span>تسوق الآن</span>
                    <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl font-bold mb-4 text-foreground">المنتجات المميزة</h2>
              <p className="text-muted-foreground text-xl">اختيارات خاصة من أفضل منتجاتنا</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 h-14 bg-transparent"
              >
                <Link href="/shop">
                  عرض جميع المنتجات
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="font-serif text-5xl font-bold mb-6 text-balance">هل وجدت ما يعجبك؟</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-pretty leading-relaxed opacity-95">
              تواصل معنا عبر واتساب لإتمام طلبك بسهولة وسرعة
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-10 h-14 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href="/contact">اتصل بنا الآن</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
