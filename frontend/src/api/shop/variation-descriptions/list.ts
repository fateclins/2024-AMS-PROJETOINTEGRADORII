import { api } from "@/lib/axios";

interface VariationDescriptionBody {
  id: number
  descricao: string
}

interface VariationDescriptionResponse {
  data: VariationDescriptionBody[];
  pagination: {
    current_page: number
    per_page: number
    total_records: number
    total_pages: number
  }
}

export interface VariationDescriptionParams {
  filter: {
    nome?: string | null
    valor?: number | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}

export async function listVariationDescriptionsController({ filter, pagination }: VariationDescriptionParams) {
  const response = await api.get<VariationDescriptionResponse>("/variationdescription", {
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
