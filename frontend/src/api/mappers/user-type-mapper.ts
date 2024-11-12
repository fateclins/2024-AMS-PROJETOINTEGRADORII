import { UserTypeBody } from "../shop/user-types/create";

export class UserTypeMapper {
  public static toResponse(data: Partial<UserTypeBody>) {
    return {
      id: !data.id ? undefined : data.id,
      descricao: !data.description ? undefined : data.description,
    };
  }

  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      description: !data.descricao ? undefined : data.descricao,
    };
  }
}
