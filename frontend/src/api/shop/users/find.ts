import { api } from "@/lib/axios";

export async function findUsersController(id: number) {
  const response = await api.get(`/user/${id}`);

  return response.data;
}

