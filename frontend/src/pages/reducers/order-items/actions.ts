import { OrderItemsReducerType } from "./reducer"

export enum OrderItemsActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type OrderItemsActions = {
    type: 
        | OrderItemsActionTypes.CREATE
        | OrderItemsActionTypes.DELETE
        | OrderItemsActionTypes.LIST
        | OrderItemsActionTypes.SELECT
        | OrderItemsActionTypes.UPDATE,
    payload: {
        item: OrderItemsReducerType
    }
}



export function createOrderItemsAction(item: any) {
    return {
        type: OrderItemsActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateOrderItemsAction(item: any) {
    return {
        type: OrderItemsActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectOrderItemsAction(item: any) {
    return {
        type: OrderItemsActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listOrderItemsAction(item: any) {
    return {
        type: OrderItemsActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteOrderItemsAction(item: any) {
    return {
        type: OrderItemsActionTypes.DELETE,
        payload: {
            item,
        }
    }
}