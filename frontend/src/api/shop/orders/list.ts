import { api } from "@/lib/axios";

interface OrderBody {
  id: number
  valorTotal: number
  datap: string
  statusp: string
  valorFinal: number
  desconto: number
  idUsuario: number
}

interface OrderResponse {
  data: OrderBody[];
  pagination: {
    current_page: number
    per_page: number
    total_records: number
    total_pages: number
  }
}

export interface OrdersParams {
  filter: {
    nome?: string | null
    valor?: number | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}

export async function listOrdersController({ filter, pagination }: OrdersParams) {
  const response = await api.get<OrderResponse>("/order", {
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
