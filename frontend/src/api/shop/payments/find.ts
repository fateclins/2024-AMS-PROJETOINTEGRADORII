import { api } from "@/lib/axios";

export async function findPaymentsController(id: number) {
  const response = await api.get(`/payment/${id}`);

  return response.data;
}

