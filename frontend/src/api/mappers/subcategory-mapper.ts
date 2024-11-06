import { SubcategoryBody } from "../shop/subcategories/create";

export class SubcategoryMapper {
    public static toHTTP(data: Partial<SubcategoryBody>) {
        return {
            id: !data.id ? undefined : data.id,
            description: !data.description ? undefined : data.description,
            idCategory: !data.idCategory ? undefined : data.idCategory,
        }
    }
}