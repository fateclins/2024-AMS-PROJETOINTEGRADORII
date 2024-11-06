import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface VariationValueBody {
  id: number;
  value: string;
  idVariationDescription: number;
}

interface VariationValuesResponse {
  data: VariationValueBody[];
}

export async function findVariationValuesController(
  id: number,
) {
  const response = await api.get<VariationValuesResponse>(`/variationvalue/${id}`);

  return response.data;
}

export function findVariationValue(id: number) {
  return useQuery({
    queryKey: ["findVariationValue", id],
    queryFn: () => findVariationValuesController(id),
    enabled: !!id
  })
}