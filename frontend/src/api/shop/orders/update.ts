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

interface OrderResponse {}

export async function updateOrdersController(order: Partial<OrderBody>) {
    const response = await api.patch<OrderResponse>('/order', { order });

    return response.data;
}