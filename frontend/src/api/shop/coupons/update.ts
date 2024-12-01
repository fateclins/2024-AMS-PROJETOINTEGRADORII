import { CouponMapper } from "@/api/mappers/coupon-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { CouponBody } from "./create";

interface CouponResponse {
  status: string;
  message: string;
}

export async function updateCouponsController(coupons: Partial<CouponBody>) {
  const data = CouponMapper.toResponse(coupons);

  const response = await api.put<CouponResponse>("/coupon", { ...data });

  return response.data;
}

export function updateCoupon() {
  return useMutation({
    mutationKey: ["updateCoupon"],
    mutationFn: updateCouponsController,
  });
}
