import { api } from "@/lib/axios";

export async function findProductsController(id: number) {
  const response = await api.get(`/product/${id}`);

  return response.data;
}
