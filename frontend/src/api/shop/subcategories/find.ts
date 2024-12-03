import { api } from "@/lib/axios";

export async function findSubcategoriesController(id: number) {
  const response = await api.get(`/subcategory/${id}`);

  return response.data;
}
