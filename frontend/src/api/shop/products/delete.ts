import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface ProductBody {
  id: number;
  quantity: number;
  value: number;
  model: string;
  bestsellerProduct: boolean;
  idv1: number;
  idv2: number;
  idStore: number;
}

interface ProductResponse {
  data: ProductBody[];
}

export async function deleteProductsController(product: Partial<ProductBody>) {
  const response = await api.delete<ProductResponse>("/product", {
    data: { id: product.id, }
  });

  return response.data;
}

export function deleteProduct() {
  return useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: deleteProductsController
  })
}