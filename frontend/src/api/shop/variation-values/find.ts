import { api } from "@/lib/axios";

export async function findVariationValuesController(id: number) {
  const response = await api.get(`/variationvalue/${id}`);

  return response.data;
}
