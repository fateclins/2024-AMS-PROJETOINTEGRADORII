import { PaymentBody } from "../shop/payments/create";

export class PaymentMapper {
    public static toHTTP(data: Partial<PaymentBody>) {
        return {
            id: !data.id ? undefined : data.id,
            date: !data.date ? undefined : data.date,
            idOrder: !data.idOrder ? undefined : data.idOrder,
            operation: !data.operation ? undefined : data.operation,
            status: !data.status ? undefined : data.status,
            value: !data.value ? undefined : data.value,
        }
    }
}