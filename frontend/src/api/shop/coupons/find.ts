import { api } from "@/lib/axios";

export async function findCouponsController(id: number) {
  const response = await api.get(`/coupon/${id}`);

  return response.data;
}
