import { StoreBody } from "../shop/stores/create";

export class StoreMapper {
  public static toResponse(data: Partial<StoreBody>) {
    return {
      id: !data.id ? undefined : data.id,
      area: !data.area ? undefined : data.area,
      corfundo: !data.background ? undefined : data.background,
      banner: !data.banner ? undefined : data.banner,
      cnpj: !data.cnpj ? undefined : data.cnpj,
      corfonte: !data.fontColor ? undefined : data.fontColor,
      idUsuario: !data.idUser ? undefined : data.idUser,
      logo: !data.logo ? undefined : data.logo,
      nome: !data.name ? undefined : data.name,
      qtdproduto: !data.quantityProduct ? undefined : data.quantityProduct,
    };
  }
  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      area: !data.area ? undefined : data.area,
      background: !data.corfundo ? undefined : data.corfundo,
      banner: !data.banner ? undefined : data.banner,
      cnpj: !data.cnpj ? undefined : data.cnpj,
      fontColor: !data.corfonte ? undefined : data.corfonte,
      idUser: !data.idUsuario ? undefined : data.idUsuario,
      logo: !data.logo ? undefined : data.logo,
      name: !data.nome ? undefined : data.nome,
      quantityProduct: !data.qtdproduto ? undefined : data.qtdproduto,
    };
  }
}
