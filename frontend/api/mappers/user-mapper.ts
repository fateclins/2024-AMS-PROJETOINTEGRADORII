import { UserBody } from "../shop/users/create";

export class UserMapper {
  public static toResponse(data: Partial<UserBody>) {
    return {
      id: !data.id ? undefined : data.id,
      email: !data.email ? undefined : data.email,
      indentidade: !data.identity ? undefined : data.identity,
      idTipoUsuario: !data.idUserType ? undefined : data.idUserType,
      nome: !data.name ? undefined : data.name,
      senha: !data.password ? undefined : data.password,
    };
  }
  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      email: !data.email ? undefined : data.email,
      identity: !data.indentidade ? undefined : data.indentidade,
      idUserType: !data.idTipoUsuario ? undefined : data.idTipoUsuario,
      name: !data.nome ? undefined : data.nome,
      password: !data.senha ? undefined : data.senha,
    };
  }
}
