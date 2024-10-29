import { api } from "@/lib/axios";

interface UserTypeBody {
    id: number;
    description: string;
}

interface UserTypeResponse {}

export async function deleteUserTypesController(usertypes: Partial<UserTypeBody>) {
    const response = await api.delete<UserTypeResponse>('/usertypes', { data: usertypes });

    return response.data;
}