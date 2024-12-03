import { api } from "@/lib/axios";

export interface TicketBody {
  id: number
  titulo: string
  descricao: string
  ticketStatus: string
  createdAt: string
  updatedAt: any
  idUsuario: number
}


export async function createTicketsController(ticket: Partial<TicketBody>) {
  const response = await api.post("/ticket", { ...ticket });

  return response.data;
}

