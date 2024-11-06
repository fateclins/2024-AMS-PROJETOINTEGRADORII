import { OrderBody } from "../shop/orders/create";

export class OrderMapper {
    public static toHTTP(data: Partial<OrderBody>) {
        return {
            id: !data.id ? undefined : data.id,
            date: !data.date ? undefined : data.date,
            discount: !data.discount ? undefined : data.discount,
            finalValue: !data.finalValue ? undefined : data.finalValue,
            idUser: !data.idUser ? undefined : data.idUser,
            status: !data.status ? undefined : data.status,
            totalValue: !data.totalValue ? undefined : data.totalValue,
        }
    }
}