import { api } from "@/lib/axios";

interface StoreBody {
    id: number;
    name: string;
    logo: string;
    banner: string;
    quantityProduct: string;
    background: string;
    fontColor: string;
    area: string;
    cnpj: string;
    idUser: number;
}

export async function createStoresController(store: Partial<StoreBody>) {
    const response = await api.post('/store', { store });

    return response.data;
}

export async function updateStoresController(store: Partial<StoreBody>) {
    const response = await api.patch('/store', { store });

    return response.data;
}

export async function listStoresController() {
    const response = await api.get('/store');

    return response.data;
}

export async function selectStoresController(param: string | number | null) {
    const response = await api.get('/store', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteStoresController(store: Partial<StoreBody>) {
    const response = await api.delete('/store', { data: store });

    return response.data;
}