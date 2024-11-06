import { SubcategoryMapper } from "@/api/mappers/subcategory-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface SubcategoryBody {
  id: number;
  description: string;
  idCategory: number;
}

interface SubcategoryResponse {
  status: string;
  message: string;
}

export async function updateSubcategoriesController(
  subcategory: Partial<SubcategoryBody>,
) {
  const data = SubcategoryMapper.toHTTP(subcategory);

  const response = await api.put<SubcategoryResponse>("/subcategory", {
    ...data,
  });

  return response.data;
}

export function updateSubcategory() {
  return useMutation({
    mutationKey: ["updateSubcategory"],
    mutationFn: updateSubcategoriesController,
  });
}
