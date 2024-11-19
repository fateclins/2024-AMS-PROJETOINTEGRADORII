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

export async function findCouponsController(id: number) {
  const response = await api.get<CouponBody>(`/coupon/${id}`);

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
