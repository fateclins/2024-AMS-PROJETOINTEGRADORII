import { OrderMapper } from "@/api/mappers/order-mapper";
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

export async function findOrdersController(id: number) {
  const response = await api.get<OrderBody>(`/order/${id}`);

  const data = OrderMapper.toRequest(response.data);

  return data;
}

export function findOrder(id: number) {
  return useQuery({
    queryKey: ["findOrder", id],
    queryFn: () => findOrdersController(id),
    enabled: !!id,
  });
}
