import { api } from "@/lib/axios";

export interface CategoryBody {
  id: number
  nome: string
  descricao: string
}


export async function deleteCategoriesController(
  category: Partial<CategoryBody>,
) {
  const response = await api.delete("/category", {
    data: {
      id: category.id,
    },
  });

  return response.data;
}

