import { api } from "@/lib/axios";

export interface VariationValueBody {
  id: number
  valor: string
  idVariacaoDescricao: number
}

export async function createVariationValuesController(
  variationValue: Partial<VariationValueBody>,
) {
  const response = await api.post("/variationvalue", {
    ...variationValue,
  });

  return response.data;
}
