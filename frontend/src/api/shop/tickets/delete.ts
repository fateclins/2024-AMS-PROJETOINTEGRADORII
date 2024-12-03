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

export async function deleteTicketsController(ticket: Partial<TicketBody>) {
  const response = await api.delete("/ticket", {
    data: { id: ticket.id },
  });

  return response.data;
}
