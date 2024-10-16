import { TicketsActions, TicketsActionTypes } from "./actions";

export interface TicketsReducerType {
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

export function ticketsReducer(state: TicketsReducerType, action: TicketsActions) {
    switch(action.type) {
        case TicketsActionTypes.CREATE:
            
        case TicketsActionTypes.DELETE:

        case TicketsActionTypes.LIST:

        case TicketsActionTypes.SELECT:

        case TicketsActionTypes.UPDATE:

        default:
            return state
    }
}