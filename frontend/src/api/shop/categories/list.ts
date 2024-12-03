import { api } from "@/lib/axios";

export interface CategoryResponse {
  id: number
  nome: string
  descricao: string
}

interface CategoryParams {
  filter: {
    nome?: string | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}

export async function listCategoriesController({ filter, pagination }: CategoryParams) {
  const response = await api.get("/category", {
    params: {
      payload: JSON.stringify({
        filter: {},
        pagination: {
          getStart: pagination.getStart ?? 0,
          getLimit: pagination.getLimit ?? 10
        }
      })
    }
  });

  return response.data
}
