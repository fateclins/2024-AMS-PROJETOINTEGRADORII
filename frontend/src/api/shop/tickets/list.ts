import { TicketMapper } from "@/api/mappers/ticket-mapper";
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
  status: string;
  data: TicketBody[];
}

export async function listTicketsController() {
  const response = await api.get<TicketResponse>("/ticket");

  const data = TicketMapper.toRequest(response.data);

  return data;
}

export function listTickets() {
  return useQuery({
    queryKey: ["listTicket"],
    queryFn: listTicketsController,
  });
}
