import { PaymentMapper } from "@/api/mappers/payment-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { PaymentBody } from "./create";

interface PaymentResponse {
  status: string;
  message: string;
}

export async function updatePaymentsController(payments: Partial<PaymentBody>) {
  const data = PaymentMapper.toResponse(payments);

  const response = await api.put<PaymentResponse>("/payment", { ...data });

  return response.data;
}

export function updatePayment() {
  return useMutation({
    mutationKey: ["updatePayment"],
    mutationFn: updatePaymentsController,
  });
}
