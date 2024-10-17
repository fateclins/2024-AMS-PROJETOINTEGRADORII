import { api } from "@/lib/axios";

interface VariationDescriptionBody {
    id: number;
    description: string;
}

export async function createVariationDescriptionsController(variationDescriptions: Partial<VariationDescriptionBody>) {
    const response = await api.post('/variationdescriptions', { variationDescriptions });

    return response.data;
}

export async function updateVariationDescriptionsController(variationDescriptions: Partial<VariationDescriptionBody>) {
    const response = await api.patch('/variationdescriptions', { variationDescriptions });

    return response.data;
}

export async function listVariationDescriptionsController() {
    const response = await api.get('/variationdescriptions');

    return response.data;
}

export async function selectVariationDescriptionsController(param: string | number | null) {
    const response = await api.get('/variationdescriptions', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteVariationDescriptionsController(variationDescriptions: Partial<VariationDescriptionBody>) {
    const response = await api.delete('/variationdescriptions', { data: variationDescriptions });

    return response.data;
}