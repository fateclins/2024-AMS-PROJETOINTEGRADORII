import { CouponMapper } from "@/api/mappers/coupon-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface CouponBody {}

interface CouponResponse {}

export async function findCouponsController(id: number) {
  const response = await api.get(`/coupon/${id}`);

  const data = CouponMapper.toRequest(response.data);

  return data;
}

export function findCoupon(id: number) {
  return useQuery({
    queryKey: ["findCoupon", id],
    queryFn: () => findCouponsController(id),
    enabled: !!id,
  });
}
