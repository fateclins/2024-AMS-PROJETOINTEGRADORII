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

interface StoreResponse {
  data: StoreBody[];
  pagination: {
    current_page: number
    per_page: number
    total_records: number
    total_pages: number
  }
}

export interface StoreParams {
  filter: {
    nome?: string | null
    valor?: number | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}

export async function listStoresController({ filter, pagination }: StoreParams) {
  const response = await api.get<StoreResponse>("/store", {
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

