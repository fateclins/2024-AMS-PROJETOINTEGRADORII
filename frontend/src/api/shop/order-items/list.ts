import { OrderItemMapper } from "@/api/mappers/order-item-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface OrderItemBody {}

interface OrderItemResponse {}

export async function listOrderItemsController() {
  const response = await api.get("/orderitem");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return OrderItemMapper.toRequest(item);
  });
}

export function listOrderItems() {
  return useQuery({
    queryKey: ["listOrderItem"],
    queryFn: listOrderItemsController,
  });
}
