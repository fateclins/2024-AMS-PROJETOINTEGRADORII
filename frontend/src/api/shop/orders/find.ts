import { api } from "@/lib/axios";

export async function findOrdersController(id: number) {
  const response = await api.get(`/order/${id}`);

  return response.data;
}
