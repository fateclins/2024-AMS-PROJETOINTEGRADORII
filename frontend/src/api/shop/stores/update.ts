import { StoreMapper } from "@/api/mappers/store-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

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

export async function updateStoresController(store: Partial<StoreBody>) {
  const data = StoreMapper.toHTTP(store)

  const response = await api.put<StoreResponse>("/store", { ...data });

  return response.data;
}

export function updateStore() {
  return useMutation({
    mutationKey: ["updateStore"],
    mutationFn: updateStoresController
  })
}