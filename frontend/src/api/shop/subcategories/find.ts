import { SubcategoryMapper } from "@/api/mappers/subcategory-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface SubcategoryBody {}

interface SubcategoryResponse {}

export async function findSubcategoriesController(id: number) {
  const response = await api.get(`/subcategory/${id}`);

  const data = SubcategoryMapper.toRequest(response.data);

  return data;
}

export function findSubcategory(id: number) {
  return useQuery({
    queryKey: ["findSubcategory", id],
    queryFn: () => findSubcategoriesController(id),
    enabled: !!id,
  });
}
