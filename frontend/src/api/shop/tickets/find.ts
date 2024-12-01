import { TicketMapper } from "@/api/mappers/ticket-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface TicketBody {}

interface TicketResponse {}

export async function findTicketsController(id: number) {
  const response = await api.get(`/ticket/${id}`);

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
