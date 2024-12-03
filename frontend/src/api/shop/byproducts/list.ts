import { api } from "@/lib/axios";

interface ByproductBody {
  id: number,
	idProduto: number,
  idSubCat: number,
}

interface ByproductResponse {
  data: ByproductBody[];
  pagination: {
    current_page: number
    per_page: number
    total_records: number
    total_pages: number
  }
}

export interface ByproductParams {
  filter: {
    nome?: string | null
    valor?: number | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}

export async function listByproductsController({ filter, pagination }: ByproductParams) {
  const response = await api.get<ByproductResponse>("/byproduct", {
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
