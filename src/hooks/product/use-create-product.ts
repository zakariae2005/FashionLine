import { useState } from "react";
import { productService } from "@/lib/services/product.service";
import { Product } from "@/types/product";

export const useCreateProduct = () => {
  const [loading, setLoading] = useState(false);

  const createProduct = async (data: Omit<Product, "id" | "createdAt" | "updatedAt">) => {
    setLoading(true);
    try {
      const newProduct = await productService.create(data);
      return newProduct;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { createProduct, loading };
};
