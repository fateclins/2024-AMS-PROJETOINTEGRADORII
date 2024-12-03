import { api } from "@/lib/axios";


interface OrderItemBody {
  id: number
  qtdePedida: number
  qtdeAtendida: number
  valorItem: number
  idProduto: number
}

export async function updateOrderItemsController(
  orderItems: Partial<OrderItemBody>,
) {
  const response = await api.put("/orderitem", {
    ...orderItems,
  });

  return response.data;
}
