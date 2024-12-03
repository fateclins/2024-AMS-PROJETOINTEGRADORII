import { api } from "@/lib/axios";

export interface ProductBody {
  id: number
}

export async function deleteProductsController(product: Partial<ProductBody>) {
  const response = await api.delete("/product", {
    data: { id: product.id },
  });

  return response.data;
}