import { ProductBody } from "../shop/products/create";

export class ProductMapper {
    public static toHTTP(data: Partial<ProductBody>) {
        return {
            id: !data.id ? undefined : data.id,
            bestsellerProduct: !data.bestsellerProduct ? undefined : data.bestsellerProduct,
            idStore: !data.idStore ? undefined : data.idStore,
            idv1: !data.idv1 ? undefined : data.idv1,
            idv2: !data.idv2 ? undefined : data.idv2,
            model: !data.model ? undefined : data.model,
            quantity: !data.quantity ? undefined : data.quantity,
            value: !data.value ? undefined : data.value,
        }
    }
}