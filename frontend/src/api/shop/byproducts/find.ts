import { api } from "@/lib/axios";


export async function findByproductsController(id: number) {
  const response = await api.get(`/byproduct/${id}`);

  return response.data;
}
