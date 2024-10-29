import { api } from "@/lib/axios";

interface VariationValueBody {
    id: number;
    value: string;
    idVariationDescription: number;
}

interface VariationValuesResponse {}

export async function deleteVariationValuesController(variationValues: Partial<VariationValueBody>) {
    const response = await api.delete<VariationValuesResponse>('/variationvalues', { data: variationValues });

    return response.data;
}