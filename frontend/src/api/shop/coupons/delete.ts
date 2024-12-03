import { api } from "@/lib/axios";


export interface CouponBody {
  id: number
  palavraCodigo: string
  desconto: number
  idProduto: number
}

export async function deleteCouponsController(coupon: Partial<CouponBody>) {
  const response = await api.delete("/coupon", {
    data: {
      id: coupon.id,
    },
  });

  return response.data;
}
