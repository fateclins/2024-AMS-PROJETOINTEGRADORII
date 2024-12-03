import { api } from "@/lib/axios";

interface PaymentBody {
  id: number
  datap: string
  valor: number
  operacao: number
  statusp: number
  idPedido: number
}

export async function deletePaymentsController(payment: Partial<PaymentBody>) {
  const response = await api.delete("/payment", {
    data: { id: payment.id },
  });

  return response.data;
}
