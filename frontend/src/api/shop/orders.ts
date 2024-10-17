import { api } from "@/lib/axios";

interface OrderBody {
    id: number;
    totalValue: number;
    date: Date;
    status: number;
    finalValue: number;
    discount: number;
    idUser: number;
}

export async function createOrdersController(order: Partial<OrderBody>) {
    const response = await api.post('/order', { order });

    return response.data;
}

export async function updateOrdersController(order: Partial<OrderBody>) {
    const response = await api.patch('/order', { order });

    return response.data;
}

export async function listOrdersController() {
    const response = await api.get('/order');

    return response.data;
}

export async function selectOrdersController(param: string | number | null) {
    const response = await api.get('/order', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteOrdersController(order: Partial<OrderBody>) {
    const response = await api.delete('/order', { data: order });

    return response.data;
}