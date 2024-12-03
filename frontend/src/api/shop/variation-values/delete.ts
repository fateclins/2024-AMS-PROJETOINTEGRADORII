import { api } from "@/lib/axios";

interface VariationValueBody {
  id: number
  valor: string
  idVariacaoDescricao: number
}

export async function deleteVariationValuesController(
  variationValue: Partial<VariationValueBody>,
) {
  const response = await api.delete(
    "/variationvalue",
    { data: { id: variationValue.id } },
  );

  return response.data;
}
