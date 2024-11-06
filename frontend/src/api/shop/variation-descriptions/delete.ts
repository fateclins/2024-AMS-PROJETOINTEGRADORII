import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface VariationDescriptionBody {
  id: number;
  description: string;
}

interface VariationDescriptionResponse {
  data: VariationDescriptionBody[];
}

export async function deleteVariationDescriptionsController(
  variationDescription: Partial<VariationDescriptionBody>,
) {
  const response = await api.delete<VariationDescriptionResponse>(
    "/variationdescription",
      { data: { id: variationDescription.id } },
  );

  return response.data;
}

export function deleteVariationDescription() {
  return useMutation({
    mutationKey: ["deleteVariationDescription"],
    mutationFn: deleteVariationDescriptionsController
  })
}
