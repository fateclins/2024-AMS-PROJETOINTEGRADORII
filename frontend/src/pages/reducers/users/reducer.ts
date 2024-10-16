import { UsersActions, UsersActionTypes } from "./actions";

export interface UsersReducerType {
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

export function usersReducer(state: UsersReducerType, action: UsersActions) {
    switch(action.type) {
        case UsersActionTypes.CREATE:
            
        case UsersActionTypes.DELETE:

        case UsersActionTypes.LIST:

        case UsersActionTypes.SELECT:

        case UsersActionTypes.UPDATE:

        default:
            return state
    }
}