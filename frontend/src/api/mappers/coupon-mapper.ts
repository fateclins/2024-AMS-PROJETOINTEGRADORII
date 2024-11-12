import { CouponBody } from "../shop/coupons/create";

export class CouponMapper {
  public static toResponse(data: Partial<CouponBody>) {
    return {
      id: !data.id ? undefined : data.id,
      disconto: !data.discount ? undefined : data.discount,
      idProduto: !data.idProduct ? undefined : data.idProduct,
      palavraCodigo: !data.phraseCode ? undefined : data.phraseCode,
    };
  }

  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      discount: !data.desconto ? undefined : data.desconto,
      idProduct: !data.idProduto ? undefined : data.idProduto,
      phraseCode: !data.palavraCodigo ? undefined : data.palavraCodigo,
    };
  }
}
