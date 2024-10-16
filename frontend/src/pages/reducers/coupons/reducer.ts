import { CouponsActions, CouponsActionTypes } from "./actions";

export interface CouponsReducerType {
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

export function couponsReducer(state: CouponsReducerType, action: CouponsActions) {
    switch(action.type) {
        case CouponsActionTypes.CREATE:
            
        case CouponsActionTypes.DELETE:

        case CouponsActionTypes.LIST:

        case CouponsActionTypes.SELECT:

        case CouponsActionTypes.UPDATE:

        default:
            return state
    }
}