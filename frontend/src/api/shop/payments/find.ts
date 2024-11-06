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
  data: PaymentBody[];
}

export async function findPaymentsController(id: number) {
const response = await api.get<PaymentResponse>(`/payment/${id}`);

  return response.data;
}

export function findPayment(id: number) {
  return useQuery({
    queryKey: ["findPayment", id],
    queryFn: () => findPaymentsController(id),
    enabled: !!id
  })
}