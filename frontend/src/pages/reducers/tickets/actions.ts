import { TicketsReducerType } from "./reducer"

export enum TicketsActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type TicketsActions = {
    type: 
        | TicketsActionTypes.CREATE
        | TicketsActionTypes.DELETE
        | TicketsActionTypes.LIST
        | TicketsActionTypes.SELECT
        | TicketsActionTypes.UPDATE,
    payload: {
        item: TicketsReducerType
    }
}



export function createTicketsAction(item: any) {
    return {
        type: TicketsActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateTicketsAction(item: any) {
    return {
        type: TicketsActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectTicketsAction(item: any) {
    return {
        type: TicketsActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listTicketsAction(item: any) {
    return {
        type: TicketsActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteTicketsAction(item: any) {
    return {
        type: TicketsActionTypes.DELETE,
        payload: {
            item,
        }
    }
}