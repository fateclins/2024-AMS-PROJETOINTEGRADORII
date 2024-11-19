import { PaymentMapper } from "@/api/mappers/payment-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

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
  data: PaymentBody[];
}

export async function listPaymentsController() {
  const response = await api.get<PaymentResponse>("/payment");

  const data = PaymentMapper.toRequest(response.data);

  return data;
}

export function listPayments() {
  return useQuery({
    queryKey: ["listPayment"],
    queryFn: listPaymentsController,
  });
}
