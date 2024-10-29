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

export async function listTicketsController() {
    const response = await api.get<TicketResponse>('/tickets');

    return response.data;
}