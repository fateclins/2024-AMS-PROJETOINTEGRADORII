import { api } from "@/lib/axios";

interface PaymentBody {
    id: number;
    date: Date;
    value: number;
    operation: number;
    status: number;
    idOrder: number;
}

export async function createPaymentsController(payments: Partial<PaymentBody>) {
    const response = await api.post('/payments', { payments });

    return response.data;
}

export async function updatePaymentsController(payments: Partial<PaymentBody>) {
    const response = await api.patch('/payments', { payments });

    return response.data;
}

export async function listPaymentsController() {
    const response = await api.get('/payments');

    return response.data;
}

export async function selectPaymentsController(param: string | number | null) {
    const response = await api.get('/payments', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deletePaymentsController(payments: Partial<PaymentBody>) {
    const response = await api.delete('/payments', { data: payments });

    return response.data;
}