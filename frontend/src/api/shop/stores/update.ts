import { api } from "@/lib/axios";

interface StoreBody {
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

export async function updateStoresController(store: Partial<StoreBody>) {
const response = await api.put("/store", { ...store });

  return response.data;
}

