import { OrderItemBody } from "../shop/order-items/create";

export class OrderItemMapper {
    public static toHTTP(data: Partial<OrderItemBody>) {
        return {
            id: !data.id ? undefined : data.id,
            idProduct: !data.idProduct ? undefined : data.idProduct,
            itemValue: !data.itemValue ? undefined : data.itemValue,
            quantityOrdered: !data.quantityOrdered ? undefined : data.quantityOrdered,
            quantityServed: !data.quantityServed ? undefined : data.quantityServed,
        }
    }
}