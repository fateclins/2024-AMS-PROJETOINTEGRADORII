import { CouponMapper } from "@/api/mappers/coupon-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface CouponBody {
  id: number;
  phraseCode: string;
  discount: number;
  idProduct: number;
}

interface CouponResponse {
  status: string;
  message: string;
}

export async function createCouponsController(coupons: Partial<CouponBody>) {
  const data = CouponMapper.toResponse(coupons);

  const response = await api.post<CouponResponse>("/coupon", { ...data });

  return response.data;
}

export function createCoupon() {
  return useMutation({
    mutationKey: ["createCoupon"],
    mutationFn: createCouponsController,
  });
}
