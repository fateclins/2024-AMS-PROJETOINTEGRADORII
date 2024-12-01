import { ByproductBody } from "../shop/byproducts/create";

export class ByproductMapper {
  public static toResponse(data: Partial<ByproductBody>) {
    return {
      id: !data.id ? undefined : data.id,
      idProduto: !data.idProduct ? undefined : data.idProduct,
      idSubCat: !data.idSubcategory ? undefined : data.idSubcategory,
    };
  }

  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      idProduct: !data.idProduto ? undefined : data.idProduto,
      idSubcategory: !data.idSubCat ? undefined : data.idSubCat,
    };
  }
}
