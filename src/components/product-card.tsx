import { Product } from "@/types/product";
import Image from "next/image"
import Link from "next/link"


interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
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
    <Link 
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
          {product.type && (
            <span className="bg-gray-900/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white uppercase tracking-wide">
              {getCategoryTypeLabel(product.type)}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6 border-t border-stone-100">
        <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-1 group-hover:text-gray-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{product.price} درهم</span>
          <span className="text-sm text-gray-600 uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
            عرض التفاصيل ←
          </span>
        </div>
      </div>
    </Link>
  )
}