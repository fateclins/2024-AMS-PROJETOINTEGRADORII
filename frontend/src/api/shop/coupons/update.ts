import { CouponMapper } from "@/api/mappers/coupon-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface CouponBody {
  id: number;
  phraseCode: string;
  discount: number;
  idProduct: number;
}

interface CouponResponse {
  status: string;
  message: string;
}

export async function updateCouponsController(coupons: Partial<CouponBody>) {
  const data = CouponMapper.toHTTP(coupons);

  const response = await api.put<CouponResponse>("/coupon", { ...data });

  return response.data;
}

export function updateCoupon() {
  return useMutation({
    mutationKey: ["updateCoupon"],
    mutationFn: updateCouponsController,
  });
}
