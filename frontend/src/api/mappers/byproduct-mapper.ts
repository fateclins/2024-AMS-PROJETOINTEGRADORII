import { ByproductBody } from "../shop/byproducts/create";

export class ByproductMapper {
    public static toHTTP(data: Partial<ByproductBody>) {
        return {
            id: !data.id ? undefined : data.id,
            idProduct: !data.idProduct ? undefined : data.idProduct,
            idSubcategory: !data.idSubcategory ? undefined : data.idSubcategory,
        }
    }
}