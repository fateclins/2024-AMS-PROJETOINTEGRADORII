import { api } from "@/lib/axios";

interface OrderBody {
  id: number
  valorTotal: number
  datap: string
  statusp: string
  valorFinal: number
  desconto: number
  idUsuario: number
}

export async function deleteOrdersController(order: Partial<OrderBody>) {
  const response = await api.delete("/order", {
    data: { id: order.id },
  });

  return response.data;
}