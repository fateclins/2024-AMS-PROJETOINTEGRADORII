import { api } from "@/lib/axios";

export interface OrderItemBody {
  id: number
  qtdePedida: number
  qtdeAtendida: number
  valorItem: number
  idProduto: number
}

export async function createOrderItemsController(
  orderItem: Partial<OrderItemBody>,
) {
  const response = await api.post("/orderitem", {
    ...orderItem,
  });

  return response.data;
}

