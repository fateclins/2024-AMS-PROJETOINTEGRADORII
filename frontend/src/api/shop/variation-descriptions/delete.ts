import { api } from "@/lib/axios";

interface VariationDescriptionBody {
  id: number
  descricao: string
}

export async function deleteVariationDescriptionsController(
  variationDescription: Partial<VariationDescriptionBody>,
) {
  const response = await api.delete(
    "/variationdescription",
    { data: { id: variationDescription.id } },
  );

  return response.data;
}
