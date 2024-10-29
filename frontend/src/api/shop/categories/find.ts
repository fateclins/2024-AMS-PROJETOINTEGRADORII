import { api } from "@/lib/axios";

interface CategoryBody {
    id: number;
    name: string;
    description: string;
}

interface CategoryResponse {}

export async function findCategoriesController(param: string | number | null) {
    const response = await api.get<CategoryResponse>('/categories', {
        params: {
            param
        }
    });

    return response.data;
}