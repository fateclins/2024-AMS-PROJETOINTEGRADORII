import { PaymentMapper } from "@/api/mappers/payment-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface PaymentBody {}

interface PaymentResponse {}

export async function listPaymentsController() {
  const response = await api.get("/user");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return PaymentMapper.toRequest(item);
  });
}

export function listPayments() {
  return useQuery({
    queryKey: ["listPayment"],
    queryFn: listPaymentsController,
  });
}
