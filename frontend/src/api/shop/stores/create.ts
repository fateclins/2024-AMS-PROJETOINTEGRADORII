import { StoreMapper } from "@/api/mappers/store-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface StoreBody {
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
  message: string;
}

export async function createStoresController(store: Partial<StoreBody>) {
  const data = StoreMapper.toResponse(store);

  const response = await api.post<StoreResponse>("/store", { ...data });

  return response.data;
}

export function createStore() {
  return useMutation({
    mutationKey: ["createStores"],
    mutationFn: createStoresController,
  });
}
