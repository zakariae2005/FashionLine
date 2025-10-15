import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 bg-card">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
      <CardContent className="p-5">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">{product.description}</p>
        <p className="text-2xl font-bold text-primary">{product.price} درهم</p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button asChild className="w-full h-11 shadow-sm hover:shadow-md transition-shadow">
          <Link href={`/product/${product.id}`}>عرض التفاصيل</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
