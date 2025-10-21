"use client"

import React, { useEffect, useState } from 'react';
import { ArrowLeft, Truck, Shield, Award, RefreshCw, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useProduct } from '@/hooks/product/use-product';
import { Product } from '@/types/product';
import { Header } from '@/components/header';
import { Footer } from "@/components/footer";

export default function HomePage() {
  const { products, loading } = useProduct();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      // Get first 6 products as featured or filter by your criteria
      setFeaturedProducts(products.slice(0, 6));
    }
  }, [products]);

  const getCategoryProducts = (category: string) => {
    return products.filter((p: Product) => p.category === category);
  };

  const getCategoryImage = (category: string) => {
    const categoryProducts = getCategoryProducts(category);
    return categoryProducts.length > 0 ? categoryProducts[0].image : '/placeholder.svg';
  };

  const getCategoryName = (category: string) => {
    switch(category) {
      case 'men': return 'رجال';
      case 'women': return 'نساء';
      case 'kids': return 'أطفال';
      default: return category;
    }
  };

  const getCategoryTypeLabel = (type: string) => {
    switch(type) {
      case 'boots': return 'أحذية';
      case 'shirt': return 'قمصان';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-stone-100" style={{ fontFamily: 'Arial, sans-serif' }}>
        <Header />
      {/* Hero Section with Image Background */}
      <section className="relative h-[600px] px-6">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/sh1.jpg" 
            alt="Hero Background" 
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative h-full max-w-7xl mx-auto flex items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              مجموعة الأحذية
              <br />
              <span className="text-stone-300">الفاخرة</span>
            </h1>
            <p className="text-lg text-stone-200 mb-8 leading-relaxed">
              اكتشف أحدث تشكيلة من الأحذية العصرية المصممة بعناية لتوفير الراحة والأناقة في كل خطوة
            </p>
            <Link href="/products">
              <button className="bg-white text-gray-900 px-10 py-4 hover:bg-stone-100 transition-colors uppercase tracking-wide text-sm font-medium">
                تسوق الآن
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Boots Category */}
            <Link href="/shop" className="group relative h-96 bg-stone-200 overflow-hidden hover:shadow-lg transition-all">
              <Image 
                src="/images/sh2.jpg" 
                alt="أحذية" 
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 left-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-wide">أحذية</h3>
                <p className="text-white/90 mb-4">راحة وأداء عالي</p>
                <div className="inline-flex items-center font-medium uppercase text-sm">
                  <span>تسوق الآن</span>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Shirts Category */}
            <Link href="/shop" className="group relative h-96 bg-stone-200 overflow-hidden hover:shadow-lg transition-all">
              <Image 
                src="/images/sh3.jpg" 
                alt="قمصان" 
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 left-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-wide">قمصان</h3>
                <p className="text-white/90 mb-4">أناقة كلاسيكية</p>
                <div className="inline-flex items-center font-medium uppercase text-sm">
                  <span>تسوق الآن</span>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </div>
              </div>
            </Link>
            
          </div>
        </div>
      </section>

      {/* Best Products */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 uppercase tracking-wide">أفضل المنتجات</h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-12 w-12 animate-spin text-gray-900" />
            </div>
          ) : featuredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map((product) => (
                  <Link 
                    key={product.id} 
                    href={`/product/${product.id}`}
                    className="bg-white group hover:shadow-xl transition-all"
                  >
                    <div className="h-80 bg-stone-100 relative overflow-hidden">
                      <Image
                        src={product.image || '/placeholder.svg'}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors"></div>
                      
                      {/* Category & Type Badge */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-900 uppercase tracking-wide">
                          {getCategoryName(product.category)}
                        </span>
                        <span className="bg-gray-900/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white uppercase tracking-wide">
                          {getCategoryTypeLabel(product.type)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 border-t border-stone-100">
                      <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-900">{product.price} درهم</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Link href="/shop">
                  <button className="bg-white text-gray-900 px-10 py-4 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all uppercase tracking-wide text-sm font-medium">
                    عرض جميع المنتجات
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">لا توجد منتجات حالياً</p>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 border-y border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4">
                <Truck className="w-full h-full text-gray-900" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1 uppercase text-sm tracking-wide">شحن مجاني</h3>
              <p className="text-gray-600 text-sm">للطلبات فوق 500 درهم</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4">
                <RefreshCw className="w-full h-full text-gray-900" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1 uppercase text-sm tracking-wide">استرجاع سهل</h3>
              <p className="text-gray-600 text-sm">خلال 30 يوم</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4">
                <Shield className="w-full h-full text-gray-900" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1 uppercase text-sm tracking-wide">دفع آمن</h3>
              <p className="text-gray-600 text-sm">حماية 100%</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4">
                <Award className="w-full h-full text-gray-900" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1 uppercase text-sm tracking-wide">ضمان الجودة</h3>
              <p className="text-gray-600 text-sm">منتجات أصلية</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Collection Banner */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 text-white p-12 md:p-20 text-center">
            <p className="uppercase tracking-widest text-sm mb-4 text-gray-400">مجموعة جديدة</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">تشكيلة الصيف 2025</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              اكتشف أحدث صيحات الموضة في عالم الأحذية الصيفية
            </p>
            <Link href="/products">
              <button className="bg-white text-gray-900 px-10 py-4 hover:bg-gray-100 transition-colors uppercase tracking-wide text-sm font-medium">
                تسوق الآن
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 uppercase">اشترك في نشرتنا</h2>
          <p className="text-gray-600 mb-8">احصل على آخر العروض والتحديثات</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="البريد الإلكتروني"
              className="flex-1 px-6 py-4 border border-gray-300 focus:outline-none focus:border-gray-900"
              required
            />
            <button 
              type="submit"
              className="bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-colors uppercase tracking-wide text-sm font-medium"
            >
              اشترك
            </button>
          </form>
        </div>
      </section>
<Footer />
      
    </div>
  );
}