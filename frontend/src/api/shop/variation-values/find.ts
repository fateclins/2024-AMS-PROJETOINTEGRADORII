import { VariationValueMapper } from "@/api/mappers/variation-value-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface VariationValueBody {
  id: number;
  value: string;
  idVariationDescription: number;
}

interface VariationValuesResponse {}

export async function findVariationValuesController(id: number) {
  const response = await api.get<VariationValueBody>(`/variationvalue/${id}`);

  const data = VariationValueMapper.toRequest(response.data);

  return data;
}

export function findVariationValue(id: number) {
  return useQuery({
    queryKey: ["findVariationValue", id],
    queryFn: () => findVariationValuesController(id),
    enabled: !!id,
  });
}
