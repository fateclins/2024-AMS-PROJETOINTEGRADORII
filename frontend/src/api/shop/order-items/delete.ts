import { api } from "@/lib/axios";

interface OrderItemBody {
  id: number
  qtdePedida: number
  qtdeAtendida: number
  valorItem: number
  idProduto: number
}

export async function deleteOrderItemsController(
  orderItem: Partial<OrderItemBody>,
) {
  const response = await api.delete("/orderitem", {
    data: {
      id: orderItem.id,
    },
  });

  return response.data;
}
