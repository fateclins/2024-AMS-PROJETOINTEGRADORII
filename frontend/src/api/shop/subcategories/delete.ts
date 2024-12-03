import { api } from "@/lib/axios";

interface SubcategoryBody {
  id: number
  descricao: string
  idCategoria: number
}

export async function deleteSubcategoriesController(
  subcategory: Partial<SubcategoryBody>,
) {
  const response = await api.delete("/subcategory", {
    data: { id: subcategory.id },
  });

  return response.data;
}
