import { OrderItemMapper } from "@/api/mappers/order-item-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface OrderItemBody {
  id: number;
  quantityOrdered: number;
  quantityServed: number;
  itemValue: number;
  idProduct: number;
}

interface OrderItemResponse {
  data: OrderItemBody[];
}

export async function updateOrderItemsController(
  orderItems: Partial<OrderItemBody>,
) {
  const data = OrderItemMapper.toHTTP(orderItems);
  
  const response = await api.put<OrderItemResponse>("/orderitem", {
    ...data,
  });

  return response.data;
}

export function updateOrderItem() {
  return useMutation({
    mutationKey: ["updateOrderItem"],
    mutationFn: updateOrderItemsController
  })
}