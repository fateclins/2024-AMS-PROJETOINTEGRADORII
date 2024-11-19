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

export async function listOrderItemsController() {
  const response = await api.get<OrderItemResponse>("/orderitem");

  return response.data;
}

export function listOrderItems() {
  return useQuery({
    queryKey: ["listOrderItem"],
    queryFn: listOrderItemsController,
  });
}
