import { api } from "@/lib/axios";

export async function findTicketsController(id: number) {
  const response = await api.get(`/ticket/${id}`);

  return response.data;
}

