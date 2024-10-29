import { api } from "@/lib/axios";

interface UserBody {
    id: number;
    name: string;
    identity: string;
    email: string;
    password: string;
    idUserType: number;
}

interface UserResponse {}

export async function findUsersController(param: string | number | null) {
    const response = await api.get<UserResponse>('/user', {
        params: {
            param
        }
    });

    return response.data;
}