import { CategoryMapper } from "@/api/mappers/category-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface CategoryBody {
  id: number;
  name: string;
  description: string;
}

interface CategoryResponse {
  data: CategoryBody[];
}

export async function updateCategoriesController(
  categories: Partial<CategoryBody>,
) {
  const data = CategoryMapper.toHTTP(categories);

  const response = await api.put<CategoryResponse>("/category", {
    ...data,
  });

  return response.data;
}

export function updateCategory() {
  return useMutation({
    mutationKey: ["updateCategory"],
    mutationFn: updateCategoriesController
  })
}