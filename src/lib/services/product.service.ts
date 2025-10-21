import { Product } from "@/types/product";

const BASE_URL = "/api/product";

export const productService = {
  getAll: async (): Promise<Product[]> => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  },

  getById: async (id: string): Promise<Product> => {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  },

  create: async (data: Omit<Product, "id" | "createdAt" | "updatedAt">) => {
    const res = await fetch(`${BASE_URL}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to create product");
    return res.json();
  },

  update: async (id: string, data: Partial<Product>) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to update product");
    return res.json();
  },

  delete: async (id: string) => {
    const res = await fetch(`${BASE_URL}/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) throw new Error("Failed to delete product");
    return res.json();
  },
};
