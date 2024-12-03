import { api } from "@/lib/axios";

export async function findProductsController(id: number) {
  const response = await api.get(`/product/${id}`);

  console.log(response.data)

  return response.data;
}
