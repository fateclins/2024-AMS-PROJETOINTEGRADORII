import { api } from "@/lib/axios";

export async function findOrderItemsController(id: number) {
  const response = await api.get(`/orderitem/${id}`);

  return response.data;
}

