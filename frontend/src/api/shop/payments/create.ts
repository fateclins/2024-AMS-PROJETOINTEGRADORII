import { api } from "@/lib/axios";

interface PaymentBody {
    id: number;
    date: Date;
    value: number;
    operation: number;
    status: number;
    idOrder: number;
}

interface PaymentResponse {}

export async function createPaymentsController(payments: Partial<PaymentBody>) {
    const response = await api.post<PaymentResponse>('/payments', { payments });

    return response.data;
}