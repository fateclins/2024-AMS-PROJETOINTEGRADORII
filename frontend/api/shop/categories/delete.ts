import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { CategoryBody } from "./create";

interface CategoryResponse {
  status: string;
  message: string;
}

export async function deleteCategoriesController(
  category: Partial<CategoryBody>,
) {
  const response = await api.delete<CategoryResponse>("/category", {
    data: {
      id: category.id,
    },
  });

  return response.data;
}

export function deleteCategory() {
  return useMutation({
    mutationKey: ["deleteCategory"],
    mutationFn: deleteCategoriesController,
  });
}
