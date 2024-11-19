import { CouponMapper } from "@/api/mappers/coupon-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface CouponBody {}

interface CouponResponse {}

export async function listCouponsController() {
  const response = await api.get("/user");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return CouponMapper.toRequest(item);
  });
}

export function listCoupons() {
  return useQuery({
    queryKey: ["listCoupon"],
    queryFn: listCouponsController,
  });
}
