import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface SubcategoryBody {
  id: number;
  description: string;
  idCategory: number;
}

interface SubcategoryResponse {
  data: SubcategoryBody[];
}

export async function deleteSubcategoriesController(
  subcategory: Partial<SubcategoryBody>,
) {
  const response = await api.delete<SubcategoryResponse>("/subcategory", {
    data: { id: subcategory.id, }
  });

  return response.data;
}

export function deleteSubcategory() {
  return useMutation({
    mutationKey: ["deleteSubcategory"],
    mutationFn: deleteSubcategoriesController
  })
}
