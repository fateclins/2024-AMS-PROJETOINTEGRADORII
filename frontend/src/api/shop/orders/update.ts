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

export async function updateOrdersController(order: Partial<OrderBody>) {
  const response = await api.put("/order", { ...order });

  return response.data;
}