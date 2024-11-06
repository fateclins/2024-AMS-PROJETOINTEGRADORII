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

export async function findProductsController(id: number) {
  const response = await api.get<ProductResponse>(`/product/${id}`);

  return response.data;
}

export function findProduct(id: number) {
  return useQuery({
    queryKey: ["findProduct", id],
    queryFn: () => findProductsController(id),
    enabled: !!id,
  });
}
