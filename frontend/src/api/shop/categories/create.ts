import { CategoryMapper } from "@/api/mappers/category-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface CategoryBody {
  id: number;
  name: string;
  description: string;
}

export interface CategoryResponse {
  data: CategoryBody[];
}

export async function createCategoriesController(
  categories: Partial<CategoryBody>,
) {
  const data = CategoryMapper.toHTTP(categories)

  const response = await api.post<CategoryResponse>("/category", {
    ...data,
  });

  return response.data;
}

export function createCategory() {
  return useMutation({
    mutationKey: ["createCategory"],
    mutationFn: createCategoriesController,
  })
}
