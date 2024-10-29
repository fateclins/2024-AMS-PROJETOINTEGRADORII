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

export async function deleteTicketsController(tickets: Partial<TicketBody>) {
    const response = await api.delete<TicketResponse>('/tickets', { data: tickets });

    return response.data;
}