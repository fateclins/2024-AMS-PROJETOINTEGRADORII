import { VariationValueMapper } from "@/api/mappers/variation-value-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface VariationValueBody {
  id: number;
  value: string;
  idVariationDescription: number;
}

interface VariationValuesResponse {
  status: string;
  message: string;
}

export async function createVariationValuesController(
  variationValue: Partial<VariationValueBody>,
) {
  const data = VariationValueMapper.toResponse(variationValue);

  const response = await api.post<VariationValuesResponse>("/variationvalue", {
    ...data,
  });

  return response.data;
}

export function createVariationValue() {
  return useMutation({
    mutationKey: ["createVariationValue"],
    mutationFn: createVariationValuesController,
  });
}
