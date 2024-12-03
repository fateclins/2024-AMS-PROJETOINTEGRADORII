import { OrderItemMapper } from "@/api/mappers/order-item-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface OrderItemBody {}

interface OrderItemResponse {}

export async function findOrderItemsController(id: number) {
  const response = await api.get(`/orderitem/${id}`);

  const data = OrderItemMapper.toRequest(response.data);

  return data;
}

export function findOrderItem(id: number) {
  return useQuery({
    queryKey: ["findOrderItem", id],
    queryFn: () => findOrderItemsController(id),
    enabled: !!id,
  });
}