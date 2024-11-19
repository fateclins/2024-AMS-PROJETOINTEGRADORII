import { OrderMapper } from "@/api/mappers/order-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface OrderBody {}

interface OrderResponse {}

export async function listOrdersController() {
  const response = await api.get("/user");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return OrderMapper.toRequest(item);
  });
}

export function listOrders() {
  return useQuery({
    queryKey: ["listOrder"],
    queryFn: listOrdersController,
  });
}
