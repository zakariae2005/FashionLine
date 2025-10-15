import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  const whatsappNumber = "212600000000" // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن منتجاتكم")}`

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-6xl font-bold text-center text-foreground mb-4">اتصل بنا</h1>
            <p className="text-center text-muted-foreground text-xl">نحن هنا للإجابة على جميع استفساراتك</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">تواصل معنا</h2>
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                  يسعدنا تواصلك معنا عبر واتساب لإتمام طلبك أو الاستفسار عن منتجاتنا. فريقنا جاهز لخدمتك في أي وقت.
                </p>

                <div className="space-y-6">
                  <Card className="border-border shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-foreground">الهاتف</h3>
                          <p className="text-muted-foreground" dir="ltr">
                            +212 6XX XXX XXX
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-foreground">البريد الإلكتروني</h3>
                          <p className="text-muted-foreground">info@fashionstore.ma</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-foreground">العنوان</h3>
                          <p className="text-muted-foreground">الدار البيضاء، المغرب</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="flex flex-col justify-center">
                <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl">
                  <CardContent className="p-10">
                    <div className="text-center">
                      <div className="inline-flex p-5 bg-primary/10 rounded-full mb-6">
                        <svg className="h-16 w-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">تواصل معنا عبر واتساب</h3>
                      <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                        أسرع وأسهل طريقة للتواصل معنا وإتمام طلبك. نحن متواجدون للرد على استفساراتك.
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className="w-full h-14 text-lg shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                          <svg className="ml-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          فتح واتساب
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-8 p-8 bg-secondary/50 rounded-xl border border-border">
                  <h4 className="font-semibold text-lg mb-4 text-foreground">ساعات العمل</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>السبت - الخميس: 9:00 صباحاً - 8:00 مساءً</p>
                    <p>الجمعة: 2:00 مساءً - 8:00 مساءً</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
