import { api } from "@/lib/axios";

interface ByproductBody {
    id: number;
    idProduct: number;
    idSubcategory: number;
}

export async function createByproductsController(byproducts: Partial<ByproductBody>) {
    const response = await api.post('/byproducts', { byproducts });

    return response.data;
}

export async function updateByproductsController(byproducts: Partial<ByproductBody>) {
    const response = await api.patch('/byproducts', { byproducts });

    return response.data;
}

export async function listByproductsController() {
    const response = await api.get('/byproducts');

    return response.data;
}

export async function selectByproductsController(param: string | number | null) {
    const response = await api.get('/byproducts', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteByproductsController(byproducts: Partial<ByproductBody>) {
    const response = await api.delete('/byproducts', { data: byproducts });

    return response.data;
}