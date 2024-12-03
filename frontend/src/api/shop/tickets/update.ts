import { api } from "@/lib/axios";

interface TicketBody {
  id: number
  titulo: string
  descricao: string
  ticketStatus: string
  createdAt: string
  updatedAt: any
  idUsuario: number
}

export async function updateTicketsController(ticket: Partial<TicketBody>) {
  const response = await api.put("/ticket", { ...ticket });

  return response.data;
}

