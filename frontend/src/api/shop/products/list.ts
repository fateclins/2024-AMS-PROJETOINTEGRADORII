import { api } from "@/lib/axios";

export interface Product {
  id: number
  qtde: number
  valor: number
  modelo: string
  imagem: string;
  descricao: string
  nome: string
  produtoDestaque: number
  idv1: number
  idv2: number
  idloja: number
}

export interface ProductResponse {
  data: Product[]
  pagination: {
    current_page: number
    per_page: number
    total_records: number
    total_pages: number
  }
}

export interface ProductParams {
  filter: {
    nome?: string | null
    valor?: number | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}

export async function listProductsController({ filter, pagination }: ProductParams): Promise<ProductResponse> {
  const response = await api.get("/product", {
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