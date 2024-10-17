import { api } from "@/lib/axios";

interface CategoryBody {
    id: number;
    name: string;
    description: string;
}

export async function createCategoriesController(categories: Partial<CategoryBody>) {
    const response = await api.post('/categories', { categories });

    return response.data;
}

export async function updateCategoriesController(categories: Partial<CategoryBody>) {
    const response = await api.patch('/categories', { categories });

    return response.data;
}

export async function listCategoriesController() {
    const response = await api.get('/categories');

    return response.data;
}

export async function selectCategoriesController(param: string | number | null) {
    const response = await api.get('/categories', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteCategoriesController(categories: Partial<CategoryBody>) {
    const response = await api.delete('/categories', { data: categories });

    return response.data;
}