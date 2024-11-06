import { CategoryBody } from "../shop/categories/create";

export class CategoryMapper {
    public static toHTTP(data: Partial<CategoryBody>) {
        return {
            id: !data.id ? undefined : data.id,
            nome: !data.name ? undefined : data.name,
            descricao: !data.description ? undefined : data.description,
        }
    }
}