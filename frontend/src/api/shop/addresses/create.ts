import { api } from "@/lib/axios";

export interface AddressBody {
  id: number
  pais: string
  cep: string
  estado: string
  cidade: string
  bairro: string
  rua: string
  numero: string
  logradouro: string
  idUsuario: number
}

export async function createAddressesController(address: Partial<AddressBody>) {
const response = await api.post("/address", { ...address });

  return response.data;
}
