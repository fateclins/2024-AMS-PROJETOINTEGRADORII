import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { OrderBody } from "./create";

interface OrderResponse {
  status: string;
  message: string;
}

export async function deleteOrdersController(order: Partial<OrderBody>) {
  const response = await api.delete<OrderResponse>("/order", {
    data: { id: order.id },
  });

  return response.data;
}

export function deleteOrder() {
  return useMutation({
    mutationKey: ["deleteOrder"],
    mutationFn: deleteOrdersController,
  });
}
