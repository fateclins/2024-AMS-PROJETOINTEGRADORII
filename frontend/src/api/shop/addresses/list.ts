import { api } from "@/lib/axios";

interface AddressBody {
    id: number;
    country: string;
    state: string;
    city: string;
    district: string;
    street: string;
    number: string;
    complement: string;
    idUser: number;
}

interface AddressResponse {
    status: string;
    id: string
}

export async function listAddressesController() {
    const response = await api.get<AddressResponse>('/address');

    return response.data;
}