import { VariationDescriptionBody } from "../shop/variation-descriptions/create";

export class VariationDescriptionMapper {
  public static toResponse(data: Partial<VariationDescriptionBody>) {
    return {
      id: !data.id ? undefined : data.id,
      descricao: !data.description ? undefined : data.description,
    };
  }

  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      description: !data.descricao ? undefined : data.descricao,
    };
  }
}
