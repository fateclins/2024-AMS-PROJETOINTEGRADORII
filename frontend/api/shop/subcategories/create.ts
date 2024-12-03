import { SubcategoryMapper } from "@/api/mappers/subcategory-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface SubcategoryBody {
  id: number;
  description: string;
  idCategory: number;
}

interface SubcategoryResponse {
  status: string;
  message: string;
}

export async function createSubcategoriesController(
  subcategory: Partial<SubcategoryBody>,
) {
  const data = SubcategoryMapper.toResponse(subcategory);

  const response = await api.post<SubcategoryResponse>("/subcategory", {
    ...data,
  });

  return response.data;
}

export function createSubcategory() {
  return useMutation({
    mutationKey: ["createSubcategory"],
    mutationFn: createSubcategoriesController,
  });
}