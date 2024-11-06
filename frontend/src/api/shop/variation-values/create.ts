import { VariationValueMapper } from "@/api/mappers/variation-value-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface VariationValueBody {
  id: number;
  value: string;
  idVariationDescription: number;
}

interface VariationValuesResponse {
  data: VariationValueBody[];
}

export async function createVariationValuesController(
  variationValue: Partial<VariationValueBody>,
) {
  const data = VariationValueMapper.toHTTP(variationValue);

  const response = await api.post<VariationValuesResponse>("/variationvalue", {
    ...data,
  });

  return response.data;
}

export function createVariationValue() {
  return useMutation({
    mutationKey: ["createVariationValue"],
    mutationFn: createVariationValuesController
  })
}
