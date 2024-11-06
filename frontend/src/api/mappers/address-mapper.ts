import { AddressBody } from "../shop/addresses/create";

export class AddressMapper {
    public static toHTTP(data: Partial<AddressBody>) {
        return {
            id: !data.id ? undefined : data.id,
            city: !data.city ? undefined : data.city,
            complement: !data.complement ? undefined : data.complement,
            country: !data.country ? undefined : data.country,
            district: !data.district ? undefined : data.district,
            idUser: !data.idUser ? undefined : data.idUser,
            number: !data.number ? undefined : data.number,
            state: !data.state ? undefined : data.state,
            street: !data.street ? undefined : data.street,
        }
    }
}