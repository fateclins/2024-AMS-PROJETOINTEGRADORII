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

export async function deletePaymentsController(payments: Partial<PaymentBody>) {
    const response = await api.delete<PaymentResponse>('/payments', { data: payments });

    return response.data;
}