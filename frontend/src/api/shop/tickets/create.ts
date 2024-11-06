import { TicketMapper } from "@/api/mappers/ticket-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface TicketBody {
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

export async function createTicketsController(ticket: Partial<TicketBody>) {
  const data = TicketMapper.toHTTP(ticket);

  const response = await api.post<TicketResponse>("/ticket", { ...data });

  return response.data;
}

export function createTicket() {
  return useMutation({
    mutationKey: ["createTicket"],
    mutationFn: createTicketsController,
  });
}
