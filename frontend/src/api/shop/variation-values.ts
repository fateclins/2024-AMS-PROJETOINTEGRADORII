import { api } from "@/lib/axios";

interface VariationValueBody {
    id: number;
    value: string;
    idVariationDescription: number;
}

export async function createVariationValuesController(variationValues: Partial<VariationValueBody>) {
    const response = await api.post('/variationvalues', { variationValues });

    return response.data;
}

export async function updateVariationValuesController(variationValues: Partial<VariationValueBody>) {
    const response = await api.patch('/variationvalues', { variationValues });

    return response.data;
}

export async function listVariationValuesController() {
    const response = await api.get('/variationvalues');

    return response.data;
}

export async function selectVariationValuesController(param: string | number | null) {
    const response = await api.get('/variationvalues', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteVariationValuesController(variationValues: Partial<VariationValueBody>) {
    const response = await api.delete('/variationvalues', { data: variationValues });

    return response.data;
}