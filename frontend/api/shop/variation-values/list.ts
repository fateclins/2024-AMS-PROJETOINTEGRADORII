import { VariationValueMapper } from "@/api/mappers/variation-value-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface VariationValueBody {}

interface VariationValuesResponse {}

export async function listVariationValuesController() {
  const response = await api.get("/variationvalue");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return VariationValueMapper.toRequest(item);
  });
}

export function listVariationValues() {
  return useQuery({
    queryKey: ["listVariationValue"],
    queryFn: listVariationValuesController,
  });
}
