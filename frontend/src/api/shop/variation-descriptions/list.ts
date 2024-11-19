import { VariationDescriptionMapper } from "@/api/mappers/variation-description-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface VariationDescriptionBody {
  id: number;
  description: string;
}

interface VariationDescriptionResponse {
  status: string;
  data: VariationDescriptionBody[];
}

export async function listVariationDescriptionsController() {
  const response = await api.get<VariationDescriptionResponse>(
    "/variationdescription",
  );

  const data = VariationDescriptionMapper.toRequest(response.data);

  return data;
}

export function listVariationDescriptions() {
  return useQuery({
    queryKey: ["listVariationDescription"],
    queryFn: listVariationDescriptionsController,
  });
}
