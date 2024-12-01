import { OrderMapper } from "@/api/mappers/order-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface OrderBody {}

interface OrderResponse {}

export async function findOrdersController(id: number) {
  const response = await api.get(`/order/${id}`);

  const data = OrderMapper.toRequest(response.data);

  return data;
}

export function findOrder(id: number) {
  return useQuery({
    queryKey: ["findOrder", id],
    queryFn: () => findOrdersController(id),
    enabled: !!id,
  });
}
