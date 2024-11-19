import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface OrderItemBody {
  id: number;
  quantityOrdered: number;
  quantityServed: number;
  itemValue: number;
  idProduct: number;
}

interface OrderItemResponse {
  status: string;
  data: OrderItemBody[];
}

export async function findOrderItemsController(id: number) {
  const response = await api.get<OrderItemResponse>(`/orderitem/${id}`);

  return response.data;
}

export function findOrderItem(id: number) {
  return useQuery({
    queryKey: ["findOrderItem", id],
    queryFn: () => findOrderItemsController(id),
    enabled: !!id,
  });
}
