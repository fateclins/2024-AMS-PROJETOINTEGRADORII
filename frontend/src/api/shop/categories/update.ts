import { api } from "@/lib/axios";

interface CategoryBody {
  id: number
  nome: string
  descricao: string
}

export async function updateCategoriesController(
  categories: Partial<CategoryBody>,
) {
  const response = await api.put("/category", {
    ...categories,
  });

  return response.data;
}
