import { TicketMapper } from "@/api/mappers/ticket-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface TicketBody {}

interface TicketResponse {}

export async function listTicketsController() {
  const response = await api.get("/ticket");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return TicketMapper.toRequest(item);
  });
}

export function listTickets() {
  return useQuery({
    queryKey: ["listTicket"],
    queryFn: listTicketsController,
  });
}
