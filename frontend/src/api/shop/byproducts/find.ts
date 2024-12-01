import { ByproductMapper } from "@/api/mappers/byproduct-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface ByproductBody {}

interface ByproductResponse {}

export async function findByproductsController(id: number) {
  const response = await api.get(`/byproduct/${id}`);

  const data = ByproductMapper.toRequest(response.data);

  return data;
}

export function findByproduct(id: number) {
  return useQuery({
    queryKey: ["findByproduct", id],
    queryFn: () => findByproductsController(id),
    enabled: !!id,
  });
}
