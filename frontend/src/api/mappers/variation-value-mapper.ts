import { VariationValueBody } from "../shop/variation-values/create";

export class VariationValueMapper {
  public static toResponse(data: Partial<VariationValueBody>) {
    return {
      id: !data.id ? undefined : data.id,
      valor: !data.value ? undefined : data.value,
      idVariacaoDescricao: !data.idVariationDescription
        ? undefined
        : data.idVariationDescription,
    };
  }

  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      value: !data.valor ? undefined : data.valor,
      idVariationDescription: !data.idVariacaoDescricao
        ? undefined
        : data.idVariacaoDescricao,
    };
  }
}
