export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  images?: string[] // Multiple images support
  category: "men" | "women" | "kids"
}

export const products: Product[] = [
  {
    id: "1",
    name: "قميص رجالي كلاسيكي",
    description: "قميص رجالي أنيق من القطن الفاخر، مثالي للمناسبات الرسمية",
    price: 299,
    image: "/elegant-mens-dress-shirt.jpg",
    category: "men",
  },
  {
    id: "2",
    name: "فستان نسائي عصري",
    description: "فستان نسائي راقي بتصميم عصري، مناسب لجميع المناسبات",
    price: 499,
    image: "/elegant-womens-dress.jpg",
    category: "women",
  },
  {
    id: "3",
    name: "بنطلون جينز رجالي",
    description: "بنطلون جينز عالي الجودة بقصة عصرية ومريحة",
    price: 349,
    image: "/mens-jeans-pants.jpg",
    category: "men",
  },
  {
    id: "4",
    name: "بلوزة نسائية أنيقة",
    description: "بلوزة نسائية من الحرير الطبيعي بتصميم راقي",
    price: 279,
    image: "/elegant-womens-blouse.jpg",
    category: "women",
  },
  {
    id: "5",
    name: "تيشيرت أطفال ملون",
    description: "تيشيرت قطني مريح للأطفال بألوان زاهية",
    price: 149,
    image: "/colorful-kids-tshirt.jpg",
    category: "kids",
  },
  {
    id: "6",
    name: "جاكيت رجالي شتوي",
    description: "جاكيت شتوي دافئ وأنيق للرجال",
    price: 699,
    image: "/mens-winter-jacket.jpg",
    category: "men",
  },
  {
    id: "7",
    name: "تنورة نسائية كلاسيكية",
    description: "تنورة أنيقة بتصميم كلاسيكي عصري",
    price: 329,
    image: "/womens-elegant-skirt.jpg",
    category: "women",
  },
  {
    id: "8",
    name: "بنطلون أطفال مريح",
    description: "بنطلون قطني مريح للأطفال بجودة عالية",
    price: 179,
    image: "/kids-comfortable-pants.jpg",
    category: "kids",
  },
  {
    id: "9",
    name: "سترة رجالية رياضية",
    description: "سترة رياضية عصرية للرجال بتصميم مميز",
    price: 399,
    image: "/mens-sports-jacket.jpg",
    category: "men",
  },
  {
    id: "10",
    name: "فستان أطفال للمناسبات",
    description: "فستان أنيق للأطفال مناسب للحفلات والمناسبات",
    price: 249,
    image: "/kids-party-dress.jpg",
    category: "kids",
  },
  {
    id: "11",
    name: "معطف نسائي شتوي",
    description: "معطف شتوي فاخر للنساء بتصميم عصري",
    price: 799,
    image: "/womens-winter-coat.jpg",
    category: "women",
  },
  {
    id: "12",
    name: "قميص رجالي كاجوال",
    description: "قميص كاجوال مريح للاستخدام اليومي",
    price: 249,
    image: "/mens-casual-shirt.png",
    category: "men",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: "men" | "women" | "kids" | "all"): Product[] {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter((product) => product.name.toLowerCase().includes(lowerQuery))
}
