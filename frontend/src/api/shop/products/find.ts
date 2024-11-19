import { ProductMapper } from "@/api/mappers/product-mapper";
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

interface ProductResponse {}

export async function findProductsController(id: number) {
  const response = await api.get<ProductBody>(`/product/${id}`);

  const data = ProductMapper.toRequest(response.data);

  return data;
}

export function findProduct(id: number) {
  return useQuery({
    queryKey: ["findProduct", id],
    queryFn: () => findProductsController(id),
    enabled: !!id,
  });
}
