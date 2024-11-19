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

export async function findTicketsController(id: number) {
  const response = await api.get<TicketBody>(`/ticket/${id}`);

  const data = TicketMapper.toRequest(response.data);

  return data;
}

export function findTicket(id: number) {
  return useQuery({
    queryKey: ["findTicket", id],
    queryFn: () => findTicketsController(id),
    enabled: !!id,
  });
}
