import { PaymentsActions, PaymentsActionTypes } from "./actions";

export interface PaymentsReducerType {
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

export function paymentsReducer(state: PaymentsReducerType, action: PaymentsActions) {
    switch(action.type) {
        case PaymentsActionTypes.CREATE:
            
        case PaymentsActionTypes.DELETE:

        case PaymentsActionTypes.LIST:

        case PaymentsActionTypes.SELECT:

        case PaymentsActionTypes.UPDATE:

        default:
            return state
    }
}