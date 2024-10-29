import { api } from "@/lib/axios";

interface CategoryBody {
    id: number;
    name: string;
    description: string;
}

interface CategoryResponse {}

export async function listCategoriesController() {
    const response = await api.get<CategoryResponse>('/categories');

    return response.data;
}