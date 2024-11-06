import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface VariationDescriptionBody {
  id: number;
  description: string;
}

interface VariationDescriptionResponse {
  data: VariationDescriptionBody[];
}

export async function listVariationDescriptionsController() {
  const response = await api.get<VariationDescriptionResponse>(
    "/variationdescription",
  );

  return response.data;
}

export function listVariationDescriptions() {
  return useQuery({
    queryKey: ["listVariationDescription"],
    queryFn: listVariationDescriptionsController
  })
}
