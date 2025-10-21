import { useState } from "react";
import { productService } from "@/lib/services/product.service";

export const useDeleteProduct = () => {
  const [loading, setLoading] = useState(false);

  const deleteProduct = async (id: string) => {
    setLoading(true);
    try {
      await productService.delete(id);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { deleteProduct, loading };
};
