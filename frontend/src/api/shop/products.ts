import { api } from "@/lib/axios";

interface ProductBody {
    id: number;
    quantity: number;
    value: number;
    model: string;
    bestsellerProduct: boolean;
    idv1: number;
    idv2: number;
    idStore: number;
}

export async function createProductsController(products: Partial<ProductBody>) {
    const response = await api.post('/products', { products });

    return response.data;
}

export async function updateProductsController(products: Partial<ProductBody>) {
    const response = await api.patch('/products', { products });

    return response.data;
}

export async function listProductsController() {
    const response = await api.get('/products');

    return response.data;
}

export async function selectProductsController(param: string | number | null) {
    const response = await api.get('/products', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteProductsController(products: Partial<ProductBody>) {
    const response = await api.delete('/products', { data: products });

    return response.data;
}