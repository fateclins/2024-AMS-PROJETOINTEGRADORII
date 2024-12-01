import { OrderItemBody } from "../shop/order-items/create";

export class OrderItemMapper {
  public static toResponse(data: Partial<OrderItemBody>) {
    return {
      id: !data.id ? undefined : data.id,
      idProduto: !data.idProduct ? undefined : data.idProduct,
      valorItem: !data.itemValue ? undefined : data.itemValue,
      qtdePedida: !data.quantityOrdered ? undefined : data.quantityOrdered,
      qtdeAtendida: !data.quantityServed ? undefined : data.quantityServed,
    };
  }

  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      idProduct: !data.idProduto ? undefined : data.idProduto,
      itemValue: !data.valorItem ? undefined : data.valorItem,
      quantityOrdered: !data.qtdePedida ? undefined : data.qtdePedida,
      quantityServed: !data.qtdeAtendida ? undefined : data.qtdeAtendida,
    };
  }
}
