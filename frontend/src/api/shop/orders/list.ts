import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

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
  data: OrderBody[];
}

export async function listOrdersController() {
  const response = await api.get<OrderResponse>("/order");

  return response.data;
}

export function listOrders() {
  return useQuery({
    queryKey: ["listOrder"],
    queryFn: listOrdersController,
  });
}
