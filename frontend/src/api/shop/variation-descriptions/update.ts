import { VariationDescriptionMapper } from "@/api/mappers/variation-description-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface VariationDescriptionBody {
  id: number;
  description: string;
}

interface VariationDescriptionResponse {
  status: string;
  message: string;
}

export async function updateVariationDescriptionsController(
  variationDescription: Partial<VariationDescriptionBody>,
) {
  const data = VariationDescriptionMapper.toResponse(variationDescription);

  const response = await api.put<VariationDescriptionResponse>(
    "/variationdescription",
    { ...data },
  );

  return response.data;
}

export function updateVariationDescription() {
  return useMutation({
    mutationKey: ["updateVariationDescription"],
    mutationFn: updateVariationDescriptionsController,
  });
}
