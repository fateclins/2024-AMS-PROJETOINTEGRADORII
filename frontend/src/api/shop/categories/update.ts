import { api } from "@/lib/axios";

interface CategoryBody {
    id: number;
    name: string;
    description: string;
}

interface CategoryResponse {}

export async function updateCategoriesController(categories: Partial<CategoryBody>) {
    const response = await api.patch<CategoryResponse>('/categories', { categories });

    return response.data;
}