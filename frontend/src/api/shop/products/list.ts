import { ProductMapper } from "@/api/mappers/product-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface ProductBody {}

interface ProductResponse {}

interface ProductParams {
  filter: {
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
          valor: filter.valor ?? null
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