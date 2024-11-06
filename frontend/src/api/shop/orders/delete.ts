import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface OrderBody {
  id: number;
  totalValue: number;
  date: Date;
  status: number;
  finalValue: number;
  discount: number;
  idUser: number;
}

interface OrderResponse {
  data: OrderBody[];
}

export async function deleteOrdersController(order: Partial<OrderBody>) {
  const response = await api.delete<OrderResponse>("/order", { data: { id: order.id } });

  return response.data;
}

export function deleteOrder() {
  return useMutation({
    mutationKey: ["deleteOrder"],
    mutationFn: deleteOrdersController
  })
}