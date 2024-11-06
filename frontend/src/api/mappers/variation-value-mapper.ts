import { VariationValueBody } from "../shop/variation-values/create";

export class VariationValueMapper {
    public static toHTTP(data: Partial<VariationValueBody>) {
        return {
            id: !data.id ? undefined : data.id,
            value: !data.value ? undefined : data.value,
            idVariationDescription: !data.idVariationDescription ? undefined : data.idVariationDescription,
        }
    }
}