import { SubcategoryBody } from "../shop/subcategories/create";

export class SubcategoryMapper {
  public static toResponse(data: Partial<SubcategoryBody>) {
    return {
      id: !data.id ? undefined : data.id,
      descricao: !data.description ? undefined : data.description,
      idCategoria: !data.idCategory ? undefined : data.idCategory,
    };
  }
  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      description: !data.descricao ? undefined : data.descricao,
      idCategory: !data.idCategoria ? undefined : data.idCategoria,
    };
  }
}
