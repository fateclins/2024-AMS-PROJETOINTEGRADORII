import { UserTypeBody } from "../shop/user-types/create";

export class UserTypeMapper {
    public static toHTTP(data: Partial<UserTypeBody>) {
        return {
            id: !data.id ? undefined : data.id,
            description: !data.description ? undefined : data.description,
        }
    }
}