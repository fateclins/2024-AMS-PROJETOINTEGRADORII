import { CategoriesActions, CategoriesActionTypes } from "./actions";

export interface CategoriesReducerType {
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

export function categoriesReducer(state: CategoriesReducerType, action: CategoriesActions) {
    switch(action.type) {
        case CategoriesActionTypes.CREATE:
            
        case CategoriesActionTypes.DELETE:

        case CategoriesActionTypes.LIST:

        case CategoriesActionTypes.SELECT:

        case CategoriesActionTypes.UPDATE:

        default:
            return state
    }
}