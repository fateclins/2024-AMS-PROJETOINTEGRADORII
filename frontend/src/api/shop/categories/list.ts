import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface CategoryBody {
  id: number;
  name: string;
  description: string;
}

interface CategoryResponse {
  data: CategoryBody[];
}

export async function listCategoriesController() {
  const response = await api.get<CategoryResponse>("/category");

  return response.data;
}

export function listCategories() {
  return useQuery({
    queryKey: ["listCategory"],
    queryFn: listCategoriesController
  })
}