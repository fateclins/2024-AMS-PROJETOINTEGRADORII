import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface SubcategoryBody {
  id: number;
  description: string;
  idCategory: number;
}

interface SubcategoryResponse {
  status: string;
  data: SubcategoryBody[];
}

export async function listSubcategoriesController() {
  const response = await api.get<SubcategoryResponse>("/subcategory");

  return response.data;
}

export function listSubcategories() {
  return useQuery({
    queryKey: ["listSubcategory"],
    queryFn: listSubcategoriesController,
  });
}
