import { api } from "@/lib/axios";

interface UserTypeBody {
    id: number;
    description: string;
}

interface UserTypeResponse {}

export async function createUserTypesController(usertypes: Partial<UserTypeBody>) {
    const response = await api.post<UserTypeResponse>('/usertypes', { usertypes });

    return response.data;
}