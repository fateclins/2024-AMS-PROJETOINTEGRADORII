import { SubcategoriesActions, SubcategoriesActionTypes } from "./actions";

export interface SubcategoriesReducerType {
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

export function subcategoriesReducer(state: SubcategoriesReducerType, action: SubcategoriesActions) {
    switch(action.type) {
        case SubcategoriesActionTypes.CREATE:
            
        case SubcategoriesActionTypes.DELETE:

        case SubcategoriesActionTypes.LIST:

        case SubcategoriesActionTypes.SELECT:

        case SubcategoriesActionTypes.UPDATE:

        default:
            return state
    }
}