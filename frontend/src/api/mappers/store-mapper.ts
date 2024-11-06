import { StoreBody } from "../shop/stores/create";

export class StoreMapper {
    public static toHTTP(data: Partial<StoreBody>) {
        return {
            id: !data.id ? undefined : data.id,
            area: !data.area ? undefined : data.area,
            background: !data.background ? undefined : data.background,
            banner: !data.banner ? undefined : data.banner,
            cnpj: !data.cnpj ? undefined : data.cnpj,
            fontColor: !data.fontColor ? undefined : data.fontColor,
            idUser: !data.idUser ? undefined : data.idUser,
            logo: !data.logo ? undefined : data.logo,
            name: !data.name ? undefined : data.name,
            quantityProduct: !data.quantityProduct ? undefined : data.quantityProduct,
        }
    }
}