import { api } from "@/lib/axios";

interface PaymentBody {
  id: number
  datap: string
  valor: number
  operacao: number
  statusp: number
  idPedido: number
}

export async function updatePaymentsController(payments: Partial<PaymentBody>) {
const response = await api.put<PaymentResponse>("/payment", { ...payments });

  return response.data;
}
