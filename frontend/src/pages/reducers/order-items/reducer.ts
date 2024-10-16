import { OrderItemsActions, OrderItemsActionTypes } from "./actions";

export interface OrderItemsReducerType {
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

export function orderitemsReducer(state: OrderItemsReducerType, action: OrderItemsActions) {
    switch(action.type) {
        case OrderItemsActionTypes.CREATE:
            
        case OrderItemsActionTypes.DELETE:

        case OrderItemsActionTypes.LIST:

        case OrderItemsActionTypes.SELECT:

        case OrderItemsActionTypes.UPDATE:

        default:
            return state
    }
}