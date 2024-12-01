import { ProductMapper } from "@/api/mappers/product-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { ProductBody } from "./create";


interface ProductResponse {
  status: string;
  message: string;
}

export async function updateProductsController(product: Partial<ProductBody>) {
  const data = ProductMapper.toResponse(product);

  const response = await api.put<ProductResponse>("/product", { ...data });

  return response.data;
}

export function updateProduct() {
  return useMutation({
    mutationKey: ["updateProduct"],
    mutationFn: updateProductsController,
  });
}
