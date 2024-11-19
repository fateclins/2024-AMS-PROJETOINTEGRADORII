import { CategoryMapper } from "@/api/mappers/category-mapper";
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
  const response = await api.get<CategoryBody>(`/category/${id}`);

  const data = CategoryMapper.toRequest(response.data);

  return data;
}

export function findCategory(id: number) {
  return useQuery({
    queryKey: ["findCategory", id],
    queryFn: () => findCategoriesController(id),
    enabled: !!id,
  });
}
