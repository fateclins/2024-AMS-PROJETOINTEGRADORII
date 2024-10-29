import { api } from "@/lib/axios";

interface UserTypeBody {
    id: number;
    description: string;
}

interface UserTypeResponse {}

export async function listUserTypesController() {
    const response = await api.get<UserTypeResponse>('/usertypes');

    return response.data;
}