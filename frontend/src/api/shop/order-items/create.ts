import { OrderItemMapper } from "@/api/mappers/order-item-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface OrderItemBody {
  id: number;
  quantityOrdered: number;
  quantityServed: number;
  itemValue: number;
  idProduct: number;
}

interface OrderItemResponse {
  status: string;
  message: string;
}

export async function createOrderItemsController(
  orderItem: Partial<OrderItemBody>,
) {
  const data = OrderItemMapper.toHTTP(orderItem);

  const response = await api.post<OrderItemResponse>("/orderitem", {
    ...data,
  });

  return response.data;
}

export function createOrderItem() {
  return useMutation({
    mutationKey: ["createOrderItem"],
    mutationFn: createOrderItemsController,
  });
}
