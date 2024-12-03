import { api } from "@/lib/axios";

export interface CouponBody {
  id: number
  palavraCodigo: string
  desconto: number
  idProduto: number
}

export async function updateCouponsController(coupons: Partial<CouponBody>) {
  const response = await api.put("/coupon", { ...coupons });

  return response.data;
}

