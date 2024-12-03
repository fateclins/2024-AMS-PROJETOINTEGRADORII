import { api } from "@/lib/axios";

interface PaymentBody {
  id: number
  datap: string
  valor: number
  operacao: number
  statusp: number
  idPedido: number
}

interface PaymentResponse {
  data: PaymentBody[];
  pagination: {
    current_page: number
    per_page: number
    total_records: number
    total_pages: number
  }
}

export interface PaymentsParams {
  filter: {
    nome?: string | null
    valor?: number | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}

export async function listPaymentsController({filter, pagination }: PaymentsParams) {
  const response = await api.get<PaymentResponse>("/payment", {
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
