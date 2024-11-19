import { CategoryMapper } from "@/api/mappers/category-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface CategoryBody {}

interface CategoryResponse {}

export async function listCategoriesController() {
  const response = await api.get("/category");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return CategoryMapper.toRequest(item);
  });
}

export function listCategories() {
  return useQuery({
    queryKey: ["listCategory"],
    queryFn: listCategoriesController,
  });
}
