import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { VariationValueBody } from "./create";

interface VariationValuesResponse {
  status: string;
  message: string;
}

export async function deleteVariationValuesController(
  variationValue: Partial<VariationValueBody>,
) {
  const response = await api.delete<VariationValuesResponse>(
    "/variationvalue",
    { data: { id: variationValue.id } },
  );

  return response.data;
}

export function deleteVariationValue() {
  return useMutation({
    mutationKey: ["deleteVariationValue"],
    mutationFn: deleteVariationValuesController,
  });
}
