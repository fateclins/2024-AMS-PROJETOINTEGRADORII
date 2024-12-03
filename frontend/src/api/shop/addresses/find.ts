import { api } from "@/lib/axios";

export async function findAddressesController(id: number) {
  const response = await api.get(`/address/${id}`);

  return response.data;
}