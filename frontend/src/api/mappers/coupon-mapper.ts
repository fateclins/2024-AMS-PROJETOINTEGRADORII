import { CouponBody } from "../shop/coupons/create";

export class CouponMapper {
    public static toHTTP(data: Partial<CouponBody>) {
        return {
            id: !data.id ? undefined : data.id,
            discount: !data.discount ? undefined : data.discount,
            idProduct: !data.idProduct ? undefined : data.idProduct,
            phraseCode: !data.phraseCode ? undefined : data.phraseCode
        }
    }
}