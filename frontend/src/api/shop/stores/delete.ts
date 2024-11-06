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

export async function deleteStoresController(store: Partial<StoreBody>) {
  const response = await api.delete<StoreResponse>("/store", { data: { id: store.id } });

  return response.data;
}

export function deleteStore() {
  return useMutation({
    mutationKey: ["deleteStore"],
    mutationFn: deleteStoresController
  })
}