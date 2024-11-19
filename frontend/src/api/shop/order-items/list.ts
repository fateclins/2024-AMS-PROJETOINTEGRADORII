import { OrderItemMapper } from "@/api/mappers/order-item-mapper";
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

  const data = OrderItemMapper.toRequest(response.data);

  return data;
}

export function listOrderItems() {
  return useQuery({
    queryKey: ["listOrderItem"],
    queryFn: listOrderItemsController,
  });
}
