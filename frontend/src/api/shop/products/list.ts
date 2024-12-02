import { ProductMapper } from "@/api/mappers/product-mapper";
import { api } from "@/lib/axios";

interface ProductBody {}

interface ProductResponse {}

interface ProductParams {
  filter: {
    nome?: string | null
    valor?: number | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}

export async function listProductsController({ filter, pagination }: ProductParams) {
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
          getLimit: pagination.getLimit ?? 20
        }
      })
    }
  });

  const info: Array<any> = response.data;

  return info.map((item) => {
    return ProductMapper.toRequest(item);
  });
}