import { api } from "@/lib/axios";

interface TicketBody {
  id: number
  titulo: string
  descricao: string
  ticketStatus: string
  createdAt: string
  updatedAt: any
  idUsuario: number
}

interface TicketResponse {
  data: TicketBody[];
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

export async function listTicketsController({ filter, pagination }: TicketParams) {
  const response = await api.get<TicketResponse>("/ticket", {
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