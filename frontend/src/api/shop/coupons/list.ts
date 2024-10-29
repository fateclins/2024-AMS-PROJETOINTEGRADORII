import { api } from "@/lib/axios";

interface CouponBody {
    id: number;
    phraseCode: string;
    discount: number;
    idProduct: number;
}

interface CouponResponse {}

export async function listCouponsController() {
    const response = await api.get<CouponResponse>('/coupons');

    return response.data;
}