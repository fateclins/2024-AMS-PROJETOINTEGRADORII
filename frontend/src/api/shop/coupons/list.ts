import { api } from "@/lib/axios";

interface CouponBody {
  id: number
  palavraCodigo: string
  desconto: number
  idProduto: number
}

interface CouponResponse {
  data: CouponBody[];
  pagination: {
    current_page: number
    per_page: number
    total_records: number
    total_pages: number
  }
}

export interface CouponsParams {
  filter: {
    nome?: string | null
    valor?: number | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}

export async function listCouponsController({ filter, pagination }: CouponsParams) {
  const response = await api.get<CouponResponse>("/coupon", {
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
