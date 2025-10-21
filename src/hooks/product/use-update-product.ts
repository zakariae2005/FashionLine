import { useState } from "react";
import { productService } from "@/lib/services/product.service";
import { Product } from "@/types/product";

export const useUpdateProduct = () => {
  const [loading, setLoading] = useState(false);

  const updateProduct = async (id: string, data: Partial<Product>) => {
    setLoading(true);
    try {
      const updated = await productService.update(id, data);
      return updated;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { updateProduct, loading };
};
