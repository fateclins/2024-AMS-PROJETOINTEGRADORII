import { api } from "@/lib/axios";

interface SubcategoryBody {
    id: number;
    description: string;
    idCategory: number;
}

export async function createSubcategoriesController(subcategories: Partial<SubcategoryBody>) {
    const response = await api.post('/subcategories', { subcategories });

    return response.data;
}

export async function updateSubcategoriesController(subcategories: Partial<SubcategoryBody>) {
    const response = await api.patch('/subcategories', { subcategories });

    return response.data;
}

export async function listSubcategoriesController() {
    const response = await api.get('/subcategories');

    return response.data;
}

export async function selectSubcategoriesController(param: string | number | null) {
    const response = await api.get('/subcategories', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteSubcategoriesController(subcategories: Partial<SubcategoryBody>) {
    const response = await api.delete('/subcategories', { data: subcategories });

    return response.data;
}