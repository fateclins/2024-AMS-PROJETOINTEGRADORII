import { VariationDescriptionMapper } from "@/api/mappers/variation-description-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface VariationDescriptionBody {}

interface VariationDescriptionResponse {}

export async function findVariationDescriptionsController(id: number) {
  const response = await api.get(`/variationdescription/${id}`);

  const data = VariationDescriptionMapper.toRequest(response.data);

  return data;
}

export function findVariationDescription(id: number) {
  return useQuery({
    queryKey: ["findVariationDescription", id],
    queryFn: () => findVariationDescriptionsController(id),
    enabled: !!id,
  });
}
