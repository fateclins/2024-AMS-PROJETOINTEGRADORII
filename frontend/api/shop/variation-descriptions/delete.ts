import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { VariationDescriptionBody } from "./create";

interface VariationDescriptionResponse {
  status: string;
  message: string;
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
    mutationFn: deleteVariationDescriptionsController,
  });
}
