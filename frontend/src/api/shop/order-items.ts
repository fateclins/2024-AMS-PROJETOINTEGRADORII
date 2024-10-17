import { api } from "@/lib/axios";

interface OrderItemBody {
    id: number;
    quantityOrdered: number;
    quantityServed: number;
    itemValue: number;
    idProduct: number;
}

export async function createOrderItemsController(orderItems: Partial<OrderItemBody>) {
    const response = await api.post('/orderitems', { orderItems });

    return response.data;
}

export async function updateOrderItemsController(orderItems: Partial<OrderItemBody>) {
    const response = await api.patch('/orderitems', { orderItems });

    return response.data;
}

export async function listOrderItemsController() {
    const response = await api.get('/orderitems');

    return response.data;
}

export async function selectOrderItemsController(param: string | number | null) {
    const response = await api.get('/orderitems', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteOrderItemsController(orderItems: Partial<OrderItemBody>) {
    const response = await api.delete('/orderitems', { data: orderItems });

    return response.data;
}