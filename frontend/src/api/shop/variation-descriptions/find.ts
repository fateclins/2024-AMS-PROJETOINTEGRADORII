import { api } from "@/lib/axios";

export async function findVariationDescriptionsController(id: number) {
  const response = await api.get(`/variationdescription/${id}`);

  return response.data;
}
