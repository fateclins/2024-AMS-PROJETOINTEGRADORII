import { api } from "@/lib/axios";

export interface StoreBody {
  id: number
  nome: string
  logo: string
  banner: string
  qtdproduto: string
  corfundo: string
  corfonte: string
  area: string
  cnpj: string
  idUsuario: number
}

export async function createStoresController(store: Partial<StoreBody>) {
const response = await api.post("/store", { ...store });

  return response.data;
}
