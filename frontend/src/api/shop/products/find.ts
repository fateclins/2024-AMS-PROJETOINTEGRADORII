import { ProductMapper } from "@/api/mappers/product-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface ProductBody {}

interface ProductResponse {}

export async function findProductsController(id: number) {
  const response = await api.get(`/product/${id}`);

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
