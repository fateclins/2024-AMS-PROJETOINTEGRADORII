import { PaymentMapper } from "@/api/mappers/payment-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface PaymentBody {
  id: number;
  date: Date;
  value: number;
  operation: number;
  status: number;
  idOrder: number;
}

interface PaymentResponse {
  status: string;
  message: string;
}

export async function updatePaymentsController(payments: Partial<PaymentBody>) {
  const data = PaymentMapper.toHTTP(payments);

  const response = await api.put<PaymentResponse>("/payment", { ...data });

  return response.data;
}

export function updatePayment() {
  return useMutation({
    mutationKey: ["updatePayment"],
    mutationFn: updatePaymentsController,
  });
}
