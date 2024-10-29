import { api } from "@/lib/axios";

interface VariationValueBody {
    id: number;
    value: string;
    idVariationDescription: number;
}

interface VariationValuesResponse {}

export async function updateVariationValuesController(variationValues: Partial<VariationValueBody>) {
    const response = await api.patch<VariationValuesResponse>('/variationvalues', { variationValues });

    return response.data;
}