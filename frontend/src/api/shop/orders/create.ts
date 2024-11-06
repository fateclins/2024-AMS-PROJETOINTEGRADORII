import { OrderMapper } from "@/api/mappers/order-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface OrderBody {
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

export async function createOrdersController(order: Partial<OrderBody>) {
  const data = OrderMapper.toHTTP(order);

  const response = await api.post<OrderResponse>("/order", { ...data });

  return response.data;
}

export function createOrder() {
  return useMutation({
    mutationKey: ["createOrder"],
    mutationFn: createOrdersController,
  });
}
