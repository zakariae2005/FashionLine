import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from 'next/image'

export default function ContactPage() {
  const whatsappNumber = "212600000000" // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن منتجاتكم")}`

  return (
    <div className="min-h-screen bg-stone-100" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />

      <main>
        {/* Hero Section with Image Background */}
        <section className="relative h-[400px] px-6">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image 
              src="/images/sh1.jpg" 
              alt="Contact Background" 
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative h-full max-w-7xl mx-auto flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white uppercase tracking-wide">
                اتصل بنا
              </h1>
              <div className="w-20 h-1 bg-white mx-auto"></div>
              <p className="text-lg text-stone-200 mt-4">نحن هنا للإجابة على جميع استفساراتك</p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 uppercase tracking-wide">تواصل معنا</h2>
                <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                  يسعدنا تواصلك معنا عبر واتساب لإتمام طلبك أو الاستفسار عن منتجاتنا. فريقنا جاهز لخدمتك في أي وقت.
                </p>

                <div className="space-y-6">
                  {/* Phone Card */}
                  <div className="bg-white p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-stone-100">
                        <Phone className="h-6 w-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1 text-gray-900 uppercase tracking-wide">الهاتف</h3>
                        <p className="text-gray-600" dir="ltr">
                          +212 6XX XXX XXX
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="bg-white p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-stone-100">
                        <Mail className="h-6 w-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1 text-gray-900 uppercase tracking-wide">البريد الإلكتروني</h3>
                        <p className="text-gray-600">info@fashionstore.ma</p>
                      </div>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="bg-white p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-stone-100">
                        <MapPin className="h-6 w-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1 text-gray-900 uppercase tracking-wide">العنوان</h3>
                        <p className="text-gray-600">الدار البيضاء، المغرب</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="flex flex-col justify-center ">
                <div className="relative bg-gray-900 text-white p-12 overflow-hidden group rounded-md">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-20 translate-y-20"></div>
                  <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/3 rounded-full"></div>
                  
                  <div className="relative text-center">
                    {/* Icon with animation */}
                    <div className="inline-flex p-6 bg-white/10 backdrop-blur-sm mb-6 transition-transform group-hover:scale-110 duration-300">
                      <svg className="h-20 w-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    
                    {/* Title */}
                    <p className="uppercase tracking-widest text-xs mb-3 text-gray-400">تواصل فوري</p>
                    <h3 className="text-4xl font-bold mb-4 uppercase tracking-wide">تواصل معنا عبر واتساب</h3>
                    <div className="w-16 h-1 bg-white/30 mx-auto mb-6"></div>
                    
                    {/* Description */}
                    <p className="text-stone-300 mb-10 leading-relaxed text-lg max-w-md mx-auto">
                      أسرع وأسهل طريقة للتواصل معنا وإتمام طلبك. نحن متواجدون للرد على استفساراتك في أي وقت.
                    </p>
                    
                    {/* CTA Button */}
                    <a 
                      href={whatsappLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-gray-900 px-12 py-5 hover:bg-stone-100 transition-all uppercase tracking-wide text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span>فتح واتساب</span>
                      </span>
                    </a>
                    
                    {/* Trust Badge */}
                    <div className="mt-8 flex items-center justify-center gap-2 text-stone-400 text-sm">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>تواصل آمن ومشفر</span>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="mt-8 p-8 bg-white">
                  <h4 className="font-medium text-lg mb-4 text-gray-900 uppercase tracking-wide">ساعات العمل</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>السبت - الخميس: 9:00 صباحاً - 8:00 مساءً</p>
                    <p>الجمعة: 2:00 مساءً - 8:00 مساءً</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map or Additional Section */}
        <section className="py-16 px-6 bg-stone-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 uppercase tracking-wide">نحن في انتظارك</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              تواصل معنا الآن عبر واتساب للحصول على أفضل العروض والمنتجات المميزة
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}