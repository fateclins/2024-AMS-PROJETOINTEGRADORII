import { api } from "@/lib/axios";

interface VariationValueBody {
  id: number
  valor: string
  idVariacaoDescricao: number
}

export async function updateVariationValuesController(
  variationValue: Partial<VariationValueBody>,
) {
  const response = await api.put("/variationvalue", {
    ...variationValue,
  });

  return response.data;
}
