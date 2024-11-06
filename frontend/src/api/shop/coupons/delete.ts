import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface CouponBody {
  id: number;
  phraseCode: string;
  discount: number;
  idProduct: number;
}

interface CouponResponse {
  data: CouponBody[];
}

export async function deleteCouponsController(coupon: Partial<CouponBody>) {
  const response = await api.delete<CouponResponse>("/coupon", {
    data: {
      id: coupon.id,
    }
  });

  return response.data;
}

export function deleteCoupon() {
  return useMutation({
    mutationKey: ["deleteCoupon"],
    mutationFn: deleteCouponsController
  })
}