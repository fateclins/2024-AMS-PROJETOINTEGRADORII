import { CouponMapper } from "@/api/mappers/coupon-mapper";
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

  const data = CouponMapper.toRequest(response.data);

  return data;
}

export function listCoupons() {
  return useQuery({
    queryKey: ["listCoupon"],
    queryFn: listCouponsController,
  });
}
