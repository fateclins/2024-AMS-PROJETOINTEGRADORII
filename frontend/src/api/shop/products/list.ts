import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

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
  status: string;
  data: ProductBody[];
}

export async function listProductsController() {
  const response = await api.get<ProductResponse>("/product");

  return response.data;
}

export function listProducts() {
  return useQuery({
    queryKey: ["listProduct"],
    queryFn: listProductsController,
  });
}
