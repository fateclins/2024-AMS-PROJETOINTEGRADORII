import { CategoryBody } from "../shop/categories/create";

export class CategoryMapper {
  public static toResponse(data: Partial<CategoryBody>) {
    return {
      id: !data.id ? undefined : data.id,
      nome: !data.name ? undefined : data.name,
      descricao: !data.description ? undefined : data.description,
    };
  }

  public static toRequest(data: any) {
    return {
      id: !data.id ? undefined : data.id,
      name: !data.nome ? undefined : data.nome,
      description: !data.descricao ? undefined : data.descricao,
    };
  }
}
