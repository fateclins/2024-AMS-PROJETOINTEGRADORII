import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface TicketBody {
  id: number;
  title: string;
  description: string;

  createdAt: Date;
  updatedAt: Date;
  idUser: number;
}

interface TicketResponse {
  data: TicketBody[];
}

export async function listTicketsController() {
  const response = await api.get<TicketResponse>("/ticket");

  return response.data;
}

export function listTickets() {
  return useQuery({
    queryKey: ["listTicket"],
    queryFn: listTicketsController
  })
}