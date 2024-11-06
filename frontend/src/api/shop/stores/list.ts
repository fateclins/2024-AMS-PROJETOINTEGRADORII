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
  data: StoreBody[];
}

export async function listStoresController() {
  const response = await api.get<StoreResponse>("/store");

  return response;
}

export function listStores() {
  return useQuery({
    queryKey: ["listStore"],
    queryFn: listStoresController
  })
}