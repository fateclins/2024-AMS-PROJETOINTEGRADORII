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

interface AddressResponse {
  data: AddressBody[];
  pagination: {
    current_page: number
    per_page: number
    total_records: number
    total_pages: number
  }
}

export interface AddressParams {
  filter: {
    nome?: string | null
    valor?: number | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}

export async function listAddressesController({ filter, pagination }: AddressParams) {
  const response = await api.get<AddressResponse>("/address", {
    params: {
      payload: JSON.stringify({
        filter: {
          keyword: {
            nome: filter.nome ?? null,
            valor: filter.valor ?? null
          }
        },
        pagination: {
          getStart: pagination.getStart ?? 0,
          getLimit: pagination.getLimit ?? 10
        }
      })
    }
  });

  return response.data
}
