import { PaymentBody } from "../shop/payments/create";

export class PaymentMapper {
  public static toResponse(data: Partial<PaymentBody>) {
    return {
      id: !data.id ? undefined : data.id,
      datap: !data.date ? undefined : data.date,
      idPedido: !data.idOrder ? undefined : data.idOrder,
      operacao: !data.operation ? undefined : data.operation,
      statusp: !data.status ? undefined : data.status,
      valor: !data.value ? undefined : data.value,
    };
  }
  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      date: !data.datap ? undefined : data.datap,
      idOrder: !data.idPedido ? undefined : data.idPedido,
      operation: !data.operacao ? undefined : data.operacao,
      status: !data.statusp ? undefined : data.statusp,
      value: !data.valor ? undefined : data.valor,
    };
  }
}
