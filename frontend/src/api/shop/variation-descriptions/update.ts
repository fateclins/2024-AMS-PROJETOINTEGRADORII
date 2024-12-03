import { api } from "@/lib/axios";

interface VariationDescriptionBody {
  id: number
  descricao: string
}

export async function updateVariationDescriptionsController(
  variationDescription: Partial<VariationDescriptionBody>,
) {
  const response = await api.put(
    "/variationdescription",
    { ...variationDescription },
  );

  return response.data;
}

