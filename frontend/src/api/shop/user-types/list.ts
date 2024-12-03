import { api } from "@/lib/axios";

interface UserTypeBody {
  id: number
  descricao: string
}

interface UserTypeResponse {
  data: UserTypeBody[];
  pagination: { 
    current_page: number
    per_page: number
    total_records: number
    total_pages: number
  }
}

export interface TicketParams {
  filter: {
    nome?: string | null
    valor?: number | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}

export async function listUserTypesController({ filter, pagination }:  TicketParams) {
  const response = await api.get<UserTypeResponse>("/usertype", {
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

