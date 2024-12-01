import { ProductBody } from "../shop/products/create";

export class ProductMapper {
  public static toResponse(data: Partial<ProductBody>) {
    return {
      id: !data.id ? undefined : data.id,
      produtoDestaque: data.bestsellerProduct === true
        ? true
        : false,
      nome: !data.name ? undefined : data.name,
      descricao: !data.description ? undefined : data.description,
      idloja: !data.idStore ? undefined : data.idStore,
      idv1: !data.idv1 ? undefined : data.idv1,
      idv2: !data.idv2 ? undefined : data.idv2,
      modelo: !data.model ? undefined : data.model,
      qtde: !data.quantity ? undefined : data.quantity,
      valor: !data.value ? undefined : data.value,
    };
  }
  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      bestsellerProduct: data.bestsellerProduct === true
      ? true
      : false,
      name: !data.nome ? undefined : data.nome,
      description: !data.descricao ? undefined : data.descricao,
      idStore: !data.idloja ? undefined : data.idloja,
      idv1: !data.idv1 ? undefined : data.idv1,
      idv2: !data.idv2 ? undefined : data.idv2,
      model: !data.modelo ? undefined : data.modelo,
      quantity: !data.qtde ? undefined : data.qtde,
      value: !data.valor ? undefined : data.valor,
    };
  }
}
