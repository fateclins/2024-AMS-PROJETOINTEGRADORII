import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { OrderItemBody } from "./create";

interface OrderItemResponse {
  status: string;
  message: string;
}

export async function deleteOrderItemsController(
  orderItem: Partial<OrderItemBody>,
) {
  const response = await api.delete<OrderItemResponse>("/orderitem", {
    data: {
      id: orderItem.id,
    },
  });

  return response.data;
}

export function deleteOrderItem() {
  return useMutation({
    mutationKey: ["deleteOrderItem"],
    mutationFn: deleteOrderItemsController,
  });
}
