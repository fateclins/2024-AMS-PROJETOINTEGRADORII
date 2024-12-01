import { PaymentMapper } from "@/api/mappers/payment-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface PaymentBody {}

interface PaymentResponse {}

export async function findPaymentsController(id: number) {
  const response = await api.get(`/payment/${id}`);

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
