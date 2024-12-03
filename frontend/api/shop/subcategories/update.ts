import { SubcategoryMapper } from "@/api/mappers/subcategory-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { SubcategoryBody } from "./create";


interface SubcategoryResponse {
  status: string;
  message: string;
}

export async function updateSubcategoriesController(
  subcategory: Partial<SubcategoryBody>,
) {
  const data = SubcategoryMapper.toResponse(subcategory);

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