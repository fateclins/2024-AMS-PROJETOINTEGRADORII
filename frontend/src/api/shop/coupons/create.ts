import { api } from "@/lib/axios";

export interface CouponBody {
  id: number
  palavraCodigo: string
  desconto: number
  idProduto: number
}

export async function createCouponsController(coupons: Partial<CouponBody>) {

  const response = await api.post("/coupon", { ...coupons });

  return response.data;
}
