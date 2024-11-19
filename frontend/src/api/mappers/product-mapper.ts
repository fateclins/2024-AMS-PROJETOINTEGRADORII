import { ProductBody } from "../shop/products/create";

export class ProductMapper {
  public static toResponse(data: Partial<ProductBody>) {
    return {
      id: !data.id ? undefined : data.id,
      produtoDestaque: !data.bestsellerProduct
        ? undefined
        : data.bestsellerProduct,
      idLoja: !data.idStore ? undefined : data.idStore,
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
      bestsellerProduct: !data.produtoDestaque
        ? undefined
        : data.produtoDestaque,
      idStore: !data.idLoja ? undefined : data.idLoja,
      idv1: !data.idv1 ? undefined : data.idv1,
      idv2: !data.idv2 ? undefined : data.idv2,
      model: !data.modelo ? undefined : data.modelo,
      quantity: !data.qtde ? undefined : data.qtde,
      value: !data.valor ? undefined : data.valor,
    };
  }
}
