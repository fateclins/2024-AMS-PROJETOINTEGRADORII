import { VariationDescriptionMapper } from "@/api/mappers/variation-description-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface VariationDescriptionBody {}

interface VariationDescriptionResponse {}

export async function listVariationDescriptionsController() {
  const response = await api.get("/variationdescription");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return VariationDescriptionMapper.toRequest(item);
  });
}

export function listVariationDescriptions() {
  return useQuery({
    queryKey: ["listVariationDescription"],
    queryFn: listVariationDescriptionsController,
  });
}
