import { api } from "@/lib/axios";

interface CouponBody {
    id: number;
    phraseCode: string;
    discount: number;
    idProduct: number;
}

export async function createCouponsController(coupons: Partial<CouponBody>) {
    const response = await api.post('/coupons', { coupons });

    return response.data;
}

export async function updateCouponsController(coupons: Partial<CouponBody>) {
    const response = await api.patch('/coupons', { coupons });

    return response.data;
}

export async function listCouponsController() {
    const response = await api.get('/coupons');

    return response.data;
}

export async function selectCouponsController(param: string | number | null) {
    const response = await api.get('/coupons', {
        params: {
            param
        }
    });

    return response.data;
}

export async function deleteCouponsController(coupons: Partial<CouponBody>) {
    const response = await api.delete('/coupons', { data: coupons });

    return response.data;
}