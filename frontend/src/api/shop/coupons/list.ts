import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface CouponBody {
  id: number;
  phraseCode: string;
  discount: number;
  idProduct: number;
}

interface CouponResponse {
  status: string;
  data: CouponBody[];
}

export async function listCouponsController() {
  const response = await api.get<CouponResponse>("/coupon");

  return response.data;
}

export function listCoupons() {
  return useQuery({
    queryKey: ["listCoupon"],
    queryFn: listCouponsController,
  });
}
