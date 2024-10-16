import { ProductsActions, ProductsActionTypes } from "./actions";

export interface ProductsReducerType {
    id: number,
    country: string,
    state: string,
    city: string,
    district: string,
    street: string,
    number: string,
    complement: string,
    userId: string,
}[]

export function productsReducer(state: ProductsReducerType, action: ProductsActions) {
    switch(action.type) {
        case ProductsActionTypes.CREATE:
            
        case ProductsActionTypes.DELETE:

        case ProductsActionTypes.LIST:

        case ProductsActionTypes.SELECT:

        case ProductsActionTypes.UPDATE:

        default:
            return state
    }
}