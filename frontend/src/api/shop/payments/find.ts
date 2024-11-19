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

interface PaymentResponse {}

export async function findPaymentsController(id: number) {
  const response = await api.get<PaymentBody>(`/payment/${id}`);

  const data = PaymentMapper.toRequest(response.data);

  return data;
}

export function findPayment(id: number) {
  return useQuery({
    queryKey: ["findPayment", id],
    queryFn: () => findPaymentsController(id),
    enabled: !!id,
  });
}
