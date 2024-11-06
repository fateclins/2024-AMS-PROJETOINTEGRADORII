import { OrderMapper } from "@/api/mappers/order-mapper";
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
  status: string;
  message: string;
}

export async function updateOrdersController(order: Partial<OrderBody>) {
  const data = OrderMapper.toHTTP(order);

  const response = await api.put<OrderResponse>("/order", { ...data });

  return response.data;
}

export function updateOrder() {
  return useMutation({
    mutationKey: ["updateOrder"],
    mutationFn: updateOrdersController,
  });
}
