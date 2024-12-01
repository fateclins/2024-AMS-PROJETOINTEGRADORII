import { TicketMapper } from "@/api/mappers/ticket-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { TicketBody } from "./create";

interface TicketResponse {
  status: string;
  message: string;
}

export async function updateTicketsController(ticket: Partial<TicketBody>) {
  const data = TicketMapper.toResponse(ticket);

  const response = await api.put<TicketResponse>("/ticket", { ...data });

  return response.data;
}

export function updateTicket() {
  return useMutation({
    mutationKey: ["updateTicket"],
    mutationFn: updateTicketsController,
  });
}