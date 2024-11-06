import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface CategoryBody {
  id: number;
  name: string;
  description: string;
}

interface CategoryResponse {
  status: string;
  data: CategoryBody[];
}

export async function findCategoriesController(id: number) {
  const response = await api.get<CategoryResponse>(`/category/${id}`);

  return response.data;
}

export function findCategory(id: number) {
  return useQuery({
    queryKey: ["findCategory", id],
    queryFn: () => findCategoriesController(id),
    enabled: !!id,
  });
}
