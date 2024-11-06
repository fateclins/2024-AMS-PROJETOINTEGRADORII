import { VariationValueMapper } from "@/api/mappers/variation-value-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface VariationValueBody {
  id: number;
  value: string;
  idVariationDescription: number;
}

interface VariationValuesResponse {
  data: VariationValueBody[];
}

export async function updateVariationValuesController(
  variationValue: Partial<VariationValueBody>,
) {
  const data = VariationValueMapper.toHTTP(variationValue)

  const response = await api.put<VariationValuesResponse>(
    "/variationvalue",
    { ...data },
  );

  return response.data;
}

export function updateVariationValue() {
  return useMutation({
    mutationKey: ["updateVariationValue"],
    mutationFn: updateVariationValuesController
  })
}