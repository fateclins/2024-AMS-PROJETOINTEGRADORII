import { UserTypesActions, UserTypesActionTypes } from "./actions";

export interface UserTypesReducerType {
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

export function usertypesReducer(state: UserTypesReducerType, action: UserTypesActions) {
    switch(action.type) {
        case UserTypesActionTypes.CREATE:
            
        case UserTypesActionTypes.DELETE:

        case UserTypesActionTypes.LIST:

        case UserTypesActionTypes.SELECT:

        case UserTypesActionTypes.UPDATE:

        default:
            return state
    }
}