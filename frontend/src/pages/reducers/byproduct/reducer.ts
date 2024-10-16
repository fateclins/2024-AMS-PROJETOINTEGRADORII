import { ByProductActions, ByProductActionTypes } from "./actions";

export interface ByProductReducerType {
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

export function byproductReducer(state: ByProductReducerType, action: ByProductActions) {
    switch(action.type) {
        case ByProductActionTypes.CREATE:
            
        case ByProductActionTypes.DELETE:

        case ByProductActionTypes.LIST:

        case ByProductActionTypes.SELECT:

        case ByProductActionTypes.UPDATE:

        default:
            return state
    }
}