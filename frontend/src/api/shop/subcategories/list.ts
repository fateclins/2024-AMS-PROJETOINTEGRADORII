import { api } from "@/lib/axios";

interface SubcategoryBody {
    id: number;
    description: string;
    idCategory: number;
}

interface SubcategoryResponse {}

export async function listSubcategoriesController() {
    const response = await api.get<SubcategoryResponse>('/subcategories');

    return response.data;
}