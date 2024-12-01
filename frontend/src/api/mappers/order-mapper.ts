import { OrderBody } from "../shop/orders/create";

export class OrderMapper {
  public static toResponse(data: Partial<OrderBody>) {
    return {
      id: !data.id ? undefined : data.id,
      datap: !data.date ? undefined : data.date,
      desconto: !data.discount ? undefined : data.discount,
      valorFinal: !data.finalValue ? undefined : data.finalValue,
      idUsuario: !data.idUser ? undefined : data.idUser,
      statusp: !data.status ? undefined : data.status,
      valorTotal: !data.totalValue ? undefined : data.totalValue,
    };
  }

  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      date: !data.datap ? undefined : data.datap,
      discount: !data.desconto ? undefined : data.desconto,
      finalValue: !data.valorFinal ? undefined : data.valorFinal,
      idUser: !data.idUsuario ? undefined : data.idUsuario,
      status: !data.statusp ? undefined : data.statusp,
      totalValue: !data.valorTotal ? undefined : data.valorTotal,
    };
  }
}
