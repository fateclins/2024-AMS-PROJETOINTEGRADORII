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

export async function findSubcategoriesController(id: number) {
  const response = await api.get<SubcategoryResponse>(`/subcategory/${id}`);

  return response.data;
}

export function findSubcategory(id: number) {
  return useQuery({
    queryKey: ["findSubcategory", id],
    queryFn: () => findSubcategoriesController(id),
    enabled: !!id,
  });
}
