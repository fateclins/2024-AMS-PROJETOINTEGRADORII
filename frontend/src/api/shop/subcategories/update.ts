import { api } from "@/lib/axios";


interface SubcategoryBody {
  id: number
  descricao: string
  idCategoria: number
}

export async function updateSubcategoriesController(
  subcategory: Partial<SubcategoryBody>,
) {
    const response = await api.put("/subcategory", {
    ...subcategory,
  });

  return response.data;
}