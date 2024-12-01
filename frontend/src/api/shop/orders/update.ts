import { OrderMapper } from "@/api/mappers/order-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { OrderBody } from "./create";

interface OrderResponse {
  status: string;
  message: string;
}

export async function updateOrdersController(order: Partial<OrderBody>) {
  const data = OrderMapper.toResponse(order);

  const response = await api.put<OrderResponse>("/order", { ...data });

  return response.data;
}

export function updateOrder() {
  return useMutation({
    mutationKey: ["updateOrder"],
    mutationFn: updateOrdersController,
  });
}
