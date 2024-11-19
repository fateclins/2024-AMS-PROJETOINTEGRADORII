import { StoreMapper } from "@/api/mappers/store-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface StoreBody {
  id: number;
  name: string;
  logo: string;
  banner: string;
  quantityProduct: string;
  background: string;
  fontColor: string;
  area: string;
  cnpj: string;
  idUser: number;
}

interface StoreResponse {}

export async function findStoresController(id: number) {
  const response = await api.get<StoreBody>(`/store/${id}`);

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
