import { VariationDescriptionMapper } from "@/api/mappers/variation-description-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface VariationDescriptionBody {
  id: number;
  description: string;
}

interface VariationDescriptionResponse {
  data: VariationDescriptionBody[];
}

export async function createVariationDescriptionsController(
  variationDescription: Partial<VariationDescriptionBody>,
) {
  const data = VariationDescriptionMapper.toHTTP(variationDescription)

  const response = await api.post<VariationDescriptionResponse>(
    "/variationdescription",
    { ...data },
  );

  return response.data;
}

export function createVariationDescription() {
  return useMutation({
    mutationKey: ["createVariationDescription"],
    mutationFn: createVariationDescriptionsController
  })
}
