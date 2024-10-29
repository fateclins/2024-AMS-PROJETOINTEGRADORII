import { api } from "@/lib/axios";

interface VariationDescriptionBody {
    id: number;
    description: string;
}

interface VariationDescriptionResponse {}

export async function updateVariationDescriptionsController(variationDescriptions: Partial<VariationDescriptionBody>) {
    const response = await api.patch<VariationDescriptionResponse>('/variationdescriptions', { variationDescriptions });

    return response.data;
}