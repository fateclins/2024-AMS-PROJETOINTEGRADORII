import { api } from "@/lib/axios";

interface SubcategoryBody {
    id: number;
    description: string;
    idCategory: number;
}

interface SubcategoryResponse {}

export async function updateSubcategoriesController(subcategories: Partial<SubcategoryBody>) {
    const response = await api.patch<SubcategoryResponse>('/subcategories', { subcategories });

    return response.data;
}