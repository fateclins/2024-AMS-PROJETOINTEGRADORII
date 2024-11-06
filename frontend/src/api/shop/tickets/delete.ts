import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface TicketBody {
  id: number;
  title: string;
  description: string;

  createdAt: Date;
  updatedAt: Date;
  idUser: number;
}

interface TicketResponse {
  status: string;
  message: string;
}

export async function deleteTicketsController(ticket: Partial<TicketBody>) {
  const response = await api.delete<TicketResponse>("/ticket", {
    data: { id: ticket.id },
  });

  return response.data;
}

export function deleteTicket() {
  return useMutation({
    mutationKey: ["deleteTicket"],
    mutationFn: deleteTicketsController,
  });
}
