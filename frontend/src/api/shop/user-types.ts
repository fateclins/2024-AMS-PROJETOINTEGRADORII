import { api } from "@/lib/axios";

interface UserTypeBody {
    id: number;
    description: string;
}

export async function createUserTypesController(usertypes: Partial<UserTypeBody>) {
    const response = await api.post('/usertypes', { usertypes });

    return response.data;
}

export async function updateUserTypesController(usertypes: Partial<UserTypeBody>) {
    const response = await api.patch('/usertypes', { usertypes });

    return response.data;
}

export async function listUserTypesController() {
    const response = await api.get('/usertypes');

    return response.data;
}

export async function selectUserTypesController(param: string | number | null) {
    const response = await api.get('/usertypes', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteUserTypesController(usertypes: Partial<UserTypeBody>) {
    const response = await api.delete('/usertypes', { data: usertypes });

    return response.data;
}