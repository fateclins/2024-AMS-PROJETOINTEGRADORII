import { StoresActions, StoresActionTypes } from "./actions";

export interface StoresReducerType {
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

export function storesReducer(state: StoresReducerType, action: StoresActions) {
    switch(action.type) {
        case StoresActionTypes.CREATE:
            
        case StoresActionTypes.DELETE:

        case StoresActionTypes.LIST:

        case StoresActionTypes.SELECT:

        case StoresActionTypes.UPDATE:

        default:
            return state
    }
}