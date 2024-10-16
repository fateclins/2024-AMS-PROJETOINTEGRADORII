import { OrdersReducerType } from "./reducer"

export enum OrdersActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type OrdersActions = {
    type: 
        | OrdersActionTypes.CREATE
        | OrdersActionTypes.DELETE
        | OrdersActionTypes.LIST
        | OrdersActionTypes.SELECT
        | OrdersActionTypes.UPDATE,
    payload: {
        item: OrdersReducerType
    }
}



export function createOrdersAction(item: any) {
    return {
        type: OrdersActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateOrdersAction(item: any) {
    return {
        type: OrdersActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectOrdersAction(item: any) {
    return {
        type: OrdersActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listOrdersAction(item: any) {
    return {
        type: OrdersActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteOrdersAction(item: any) {
    return {
        type: OrdersActionTypes.DELETE,
        payload: {
            item,
        }
    }
}