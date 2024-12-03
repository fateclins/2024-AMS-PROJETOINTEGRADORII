import { api } from "@/lib/axios";

interface OrderItemBody {
  id: number
  qtdePedida: number
  qtdeAtendida: number
  valorItem: number
  idProduto: number
}

interface OrderItemResponse {
  data: OrderItemBody[];
  pagination: {
    current_page: number
    per_page: number
    total_records: number
    total_pages: number
  }
}

export interface OrderItemsParams {
  filter: {
    nome?: string | null
    valor?: number | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}

export async function listOrderItemsController({ filter, pagination }: OrderItemsParams) {
  const response = await api.get<OrderItemResponse>("/orderitem", {
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

  return response.data;
}
