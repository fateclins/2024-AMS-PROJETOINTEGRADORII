import { api } from "@/lib/axios";

interface UserBody {
    id: number;
    name: string;
    identity: string;
    email: string;
    password: string;
    idUserType: number;
}

export async function createUsersController(user: Partial<UserBody>) {
    const response = await api.post('/user', { user });

    return response.data;
}

export async function updateUsersController(user: Partial<UserBody>) {
    const response = await api.patch('/user', { user });

    return response.data;
}

export async function listUsersController() {
    const response = await api.get('/user');

    return response.data;
}

export async function selectUsersController(param: string | number | null) {
    const response = await api.get('/user', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteUsersController(user: Partial<UserBody>) {
    const response = await api.delete('/user', { data: user });

    return response.data;
}