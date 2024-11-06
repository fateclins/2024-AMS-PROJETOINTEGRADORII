import { PaymentMapper } from "@/api/mappers/payment-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface PaymentBody {
  id: number;
  date: Date;
  value: number;
  operation: number;
  status: number;
  idOrder: number;
}

interface PaymentResponse {
  data: PaymentBody[];
}

export async function createPaymentsController(payment: Partial<PaymentBody>) {
  const data = PaymentMapper.toHTTP(payment)

  const response = await api.post<PaymentResponse>("/payment", { ...data });

  return response.data;
}

export function createPayment() {
  return useMutation({
    mutationKey: ["createPayment"],
    mutationFn: createPaymentsController
  })
}