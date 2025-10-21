export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: "men" | "women" | "kids";
  type: "shirt" | "boots";
  createdAt: Date;
  updatedAt: Date;
}