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

export async function createOrdersController(order: Partial<OrderBody>) {
  const response = await api.post("/order", { ...order });

  return response.data;
}
