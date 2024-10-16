import { AddressesActions, AddressesActionTypes } from "./actions";

export interface AddressesReducerType {
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

export function addressesReducer(state: AddressesReducerType, action: AddressesActions) {
    switch(action.type) {
        case AddressesActionTypes.CREATE:
            
        case AddressesActionTypes.DELETE:

        case AddressesActionTypes.LIST:

        case AddressesActionTypes.SELECT:

        case AddressesActionTypes.UPDATE:

        default:
            return state
    }
}