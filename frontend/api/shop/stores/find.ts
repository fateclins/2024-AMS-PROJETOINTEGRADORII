import { StoreMapper } from "@/api/mappers/store-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface StoreBody {}

interface StoreResponse {}

export async function findStoresController(id: number) {
  const response = await api.get(`/store/${id}`);

  const data = StoreMapper.toRequest(response.data);

  return data;
}

export function findStore(id: number) {
  return useQuery({
    queryKey: ["findStore", id],
    queryFn: () => findStoresController(id),
    enabled: !!id,
  });
}
