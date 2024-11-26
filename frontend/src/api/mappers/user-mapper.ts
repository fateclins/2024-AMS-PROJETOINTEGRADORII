import { UserBody } from "../shop/users/create";

export class UserMapper {
  public static toResponse(data: Partial<UserBody>) {
    return {
      id: !data.id ? undefined : data.id,
      email: !data.email ? undefined : data.email,
      imagem: !data.image ? undefined : data.image,
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
      image: !data.imagem ? undefined : data.imagem,
      identity: !data.indentidade ? undefined : data.indentidade,
      idUserType: !data.idTipoUsuario ? undefined : data.idTipoUsuario,
      name: !data.nome ? undefined : data.nome,
      password: !data.senha ? undefined : data.senha,
    };
  }
}
