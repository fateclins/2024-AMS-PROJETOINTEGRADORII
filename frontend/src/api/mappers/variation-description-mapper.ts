import { VariationDescriptionBody } from "../shop/variation-descriptions/create";

export class VariationDescriptionMapper {
    public static toHTTP(data: Partial<VariationDescriptionBody>) {
        return {
            id: !data.id ? undefined : data.id,
            description: !data.description ? undefined : data.description,
        }
    }
}