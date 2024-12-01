import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { PaymentBody } from "./create";



interface PaymentResponse {
  status: string;
  message: string;
}

export async function deletePaymentsController(payment: Partial<PaymentBody>) {
  const response = await api.delete<PaymentResponse>("/payment", {
    data: { id: payment.id },
  });

  return response.data;
}

export function deletePayment() {
  return useMutation({
    mutationKey: ["deletePayment"],
    mutationFn: deletePaymentsController,
  });
}
