import { api } from "@/lib/axios";

export interface CategoryBody {
  id: number
  nome: string
  descricao: string
}

export async function createCategoriesController(
  categories: Partial<CategoryBody>,
) {
  const response = await api.post("/category", {
    ...categories,
  });

  return response.data;
}
