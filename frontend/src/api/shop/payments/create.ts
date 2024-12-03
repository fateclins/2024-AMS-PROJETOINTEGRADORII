import { api } from "@/lib/axios";

export interface PaymentBody {
  id: number
  datap: string
  valor: number
  operacao: number
  statusp: number
  idPedido: number
}

export async function createPaymentsController(payment: Partial<PaymentBody>) {
  const response = await api.post("/payment", { ...payment });

  return response.data;
}
