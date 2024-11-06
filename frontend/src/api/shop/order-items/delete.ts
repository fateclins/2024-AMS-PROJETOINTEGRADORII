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

export async function deleteOrderItemsController(
  orderItem: Partial<OrderItemBody>,
) {
  const response = await api.delete<OrderItemResponse>("/orderitem", {
    data: {
      id: orderItem.id,
    }
  });

  return response.data;
}

export function deleteOrderItem() {
  return useMutation({
    mutationKey: ["deleteOrderItem"],
    mutationFn: deleteOrderItemsController
  })
}