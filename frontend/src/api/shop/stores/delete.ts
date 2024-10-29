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

interface StoreResponse {}

export async function deleteStoresController(store: Partial<StoreBody>) {
    const response = await api.delete<StoreResponse>('/store', { data: store });

    return response.data;
}