import { api } from "@/lib/axios";

export async function findUserTypesController(id: number) {
  const response = await api.get(`/usertype/${id}`);

  return response.data;
}

