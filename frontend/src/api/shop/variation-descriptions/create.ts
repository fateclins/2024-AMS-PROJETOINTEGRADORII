import { api } from "@/lib/axios";

export interface VariationDescriptionBody {
  id: number
  descricao: string
}


export async function createVariationDescriptionsController(
  variationDescription: Partial<VariationDescriptionBody>,
) {
  const response = await api.post(
    "/variationdescription",
    { ...variationDescription },
  );

  return response.data;
}
