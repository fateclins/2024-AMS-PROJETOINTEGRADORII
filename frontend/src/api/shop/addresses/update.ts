import { api } from "@/lib/axios";


interface AddressBody {
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

export async function updateAddressesController(address: AddressBody) {
  const response = await api.put("/address", { ...address });

  return response.data;
}

