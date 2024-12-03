import { api } from "@/lib/axios";

export interface SubcategoryBody {
  id: number
  descricao: string
  idCategoria: number
}


export async function createSubcategoriesController(
  subcategory: Partial<SubcategoryBody>,
) {
  const response = await api.post("/subcategory", {
    ...subcategory,
  });

  return response.data;
}
