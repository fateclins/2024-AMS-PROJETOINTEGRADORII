import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { TicketBody } from "./create";

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
