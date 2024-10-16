import { OrdersActions, OrdersActionTypes } from "./actions";

export interface OrdersReducerType {
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

export function ordersReducer(state: OrdersReducerType, action: OrdersActions) {
    switch(action.type) {
        case OrdersActionTypes.CREATE:
            
        case OrdersActionTypes.DELETE:

        case OrdersActionTypes.LIST:

        case OrdersActionTypes.SELECT:

        case OrdersActionTypes.UPDATE:

        default:
            return state
    }
}