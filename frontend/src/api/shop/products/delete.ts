import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { ProductBody } from "./create";

interface ProductResponse {
  status: string;
  message: string;
}

export async function deleteProductsController(product: Partial<ProductBody>) {
  const response = await api.delete<ProductResponse>("/product", {
    data: { id: product.id },
  });

  return response.data;
}

export function deleteProduct() {
  return useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: deleteProductsController,
  });
}
