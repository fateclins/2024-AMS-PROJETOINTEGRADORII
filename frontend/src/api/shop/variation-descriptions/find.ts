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

export async function findVariationDescriptionsController(id: number) {
  const response = await api.get<VariationDescriptionResponse>(
    `/variationdescription/${id}`,
  );

  return response.data;
}

export function findVariationDescription(id: number) {
  return useQuery({
    queryKey: ["findVariationDescription", id],
    queryFn: () => findVariationDescriptionsController(id),
    enabled: !!id,
  });
}
