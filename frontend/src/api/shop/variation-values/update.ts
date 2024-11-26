import { VariationValueMapper } from "@/api/mappers/variation-value-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { VariationValueBody } from "./create";

interface VariationValuesResponse {
  status: string;
  message: string;
}

export async function updateVariationValuesController(
  variationValue: Partial<VariationValueBody>,
) {
  const data = VariationValueMapper.toResponse(variationValue);

  const response = await api.put<VariationValuesResponse>("/variationvalue", {
    ...data,
  });

  return response.data;
}

export function updateVariationValue() {
  return useMutation({
    mutationKey: ["updateVariationValue"],
    mutationFn: updateVariationValuesController,
  });
}
