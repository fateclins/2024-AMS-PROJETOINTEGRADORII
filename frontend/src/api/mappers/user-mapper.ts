import { UserBody } from "../shop/users/create";

export class UserMapper {
    public static toHTTP(data: Partial<UserBody>) {
        return {
            id: !data.id ? undefined : data.id,
            email: !data.email ? undefined : data.email,
            identity: !data.identity ? undefined : data.identity,
            idUserType: !data.idUserType ? undefined : data.idUserType,
            name: !data.name ? undefined : data.name,
            password: !data.password ? undefined : data.password,
        }
    }
}