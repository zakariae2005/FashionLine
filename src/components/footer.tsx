import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">AYOUB FASHION</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                وجهتك الأولى للأحذية العصرية عالية الجودة
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 uppercase text-sm tracking-wide">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">من نحن</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">المتجر</Link></li>
                <li><Link href="/offers" className="hover:text-white transition-colors">العروض</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">تواصل معنا</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 uppercase text-sm tracking-wide">خدمة العملاء</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/returns" className="hover:text-white transition-colors">سياسة الإرجاع</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition-colors">الشحن والتوصيل</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">الأسئلة الشائعة</Link></li>
                <li><Link href="/warranty" className="hover:text-white transition-colors">الضمان</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 uppercase text-sm tracking-wide">تابعنا</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                  <span className="text-sm">tw</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© 2025 AYOUB FASHION. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
  )
}
