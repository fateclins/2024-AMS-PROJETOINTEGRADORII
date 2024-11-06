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

export async function findTicketsController(id: number) {
  const response = await api.get<TicketResponse>(`/ticket/${id}`);

  return response.data;
}

export function findTicket(id: number) {
  return useQuery({
    queryKey: ["findTicket", id],
    queryFn: () => findTicketsController(id),
    enabled: !!id
  })
}