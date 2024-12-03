import { api } from "@/lib/axios";

export async function findStoresController(id: number) {
  const response = await api.get(`/store/${id}`);

  return response.data;
}
