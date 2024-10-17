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

export async function createAddressesController(address: Partial<AddressBody>) {
    const response = await api.post('/address', { address });

    return response.data;
}

export async function updateAddressesController(address: Partial<AddressBody>) {
    const response = await api.patch('/address', { address });

    return response.data;
}

export async function listAddressesController() {
    const response = await api.get('/address');

    return response.data;
}

export async function selectAddressesController(param: string | number | null) {
    const response = await api.get('/address', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteAddressesController(address: Partial<AddressBody>) {
    const response = await api.delete('/address', { data: address });

    return response.data;
}