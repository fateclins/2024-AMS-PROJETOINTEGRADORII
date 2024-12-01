import { AddressBody } from "../shop/addresses/create";

export class AddressMapper {
  public static toResponse(data: Partial<AddressBody>) {
    return {
      id: !data.id ? undefined : data.id,
      cidade: !data.city ? undefined : data.city,
      logradouro: !data.complement ? undefined : data.complement,
      pais: !data.country ? undefined : data.country,
      bairro: !data.district ? undefined : data.district,
      idUsuario: !data.idUser ? undefined : data.idUser,
      numero: !data.number ? undefined : data.number,
      estado: !data.state ? undefined : data.state,
      cep: !data.cep ? undefined : data.cep,
      rua: !data.street ? undefined : data.street,
    };
  }

  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      city: !data.cidade ? undefined : data.cidade,
      complement: !data.logradouro ? undefined : data.logradouro,
      country: !data.pais ? undefined : data.pais,
      district: !data.bairro ? undefined : data.bairro,
      idUser: !data.idUsuario ? undefined : data.idUsuario,
      number: !data.numero ? undefined : data.numero,
      state: !data.estado ? undefined : data.estado,
      cep: !data.cep ? undefined : data.cep,
      street: !data.rua ? undefined : data.rua,
    };
  }
}
