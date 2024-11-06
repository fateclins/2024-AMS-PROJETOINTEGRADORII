import { ProductMapper } from "@/api/mappers/product-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface ProductBody {
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

export async function createProductsController(product: Partial<ProductBody>) {
  const data = ProductMapper.toHTTP(product)

  const response = await api.post<ProductResponse>("/product", { ...data });

  return response.data;
}

export function createProduct() {
  return useMutation({
    mutationKey: ["createProduct"],
    mutationFn: createProductsController
  })
}
