import { api } from "@/lib/axios";

interface TicketBody {
    id: number;
    title: string;
    description: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    idUser: number;
}

interface TicketResponse {}

export async function findTicketsController(param: string | number | null) {
    const response = await api.get<TicketResponse>('/tickets', {
        params: {
            param
        }
    });

    return response.data;
}