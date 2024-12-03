import { api } from "@/lib/axios";

export async function findCategoriesController(id: number) {
  const response = await api.get(`/category/${id}`);

  return response.data;
}

