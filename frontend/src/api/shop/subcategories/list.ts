import { SubcategoryMapper } from "@/api/mappers/subcategory-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface SubcategoryBody {}

interface SubcategoryResponse {}

export async function listSubcategoriesController() {
  const response = await api.get("/subcategory");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return SubcategoryMapper.toRequest(item);
  });
}

export function listSubcategories() {
  return useQuery({
    queryKey: ["listSubcategory"],
    queryFn: listSubcategoriesController,
  });
}
