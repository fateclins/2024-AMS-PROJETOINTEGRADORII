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

interface StoreResponse {
  status: string;
  data: StoreBody[];
}

export async function listStoresController() {
  const response = await api.get<StoreResponse>("/store");

  const data = StoreMapper.toRequest(response.data);

  return data;
}

export function listStores() {
  return useQuery({
    queryKey: ["listStore"],
    queryFn: listStoresController,
  });
}
