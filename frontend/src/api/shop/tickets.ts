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

export async function createTicketsController(tickets: Partial<TicketBody>) {
    const response = await api.post('/tickets', { tickets });

    return response.data;
}

export async function updateTicketsController(tickets: Partial<TicketBody>) {
    const response = await api.patch('/tickets', { tickets });

    return response.data;
}

export async function listTicketsController() {
    const response = await api.get('/tickets');

    return response.data;
}

export async function selectTicketsController(param: string | number | null) {
    const response = await api.get('/tickets', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteTicketsController(tickets: Partial<TicketBody>) {
    const response = await api.delete('/tickets', { data: tickets });

    return response.data;
}