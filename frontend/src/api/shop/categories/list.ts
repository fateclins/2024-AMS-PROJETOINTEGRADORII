import { CategoryMapper } from "@/api/mappers/category-mapper";
import { api } from "@/lib/axios";

interface CategoryBody {}

interface CategoryResponse {}

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

  const info: Array<any> = response.data;

  return info.map((item) => {
    return CategoryMapper.toRequest(item);
  });
}
