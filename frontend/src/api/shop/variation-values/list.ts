import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface VariationValueBody {
  id: number;
  value: string;
  idVariationDescription: number;
}

interface VariationValuesResponse {
  status: string;
  data: VariationValueBody[];
}

export async function listVariationValuesController() {
  const response = await api.get<VariationValuesResponse>("/variationvalue");

  return response.data;
}

export function listVariationValues() {
  return useQuery({
    queryKey: ["listVariationValue"],
    queryFn: listVariationValuesController,
  });
}
