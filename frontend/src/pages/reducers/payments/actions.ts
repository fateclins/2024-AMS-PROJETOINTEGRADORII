import { PaymentsReducerType } from "./reducer"

export enum PaymentsActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type PaymentsActions = {
    type: 
        | PaymentsActionTypes.CREATE
        | PaymentsActionTypes.DELETE
        | PaymentsActionTypes.LIST
        | PaymentsActionTypes.SELECT
        | PaymentsActionTypes.UPDATE,
    payload: {
        item: PaymentsReducerType
    }
}



export function createPaymentsAction(item: any) {
    return {
        type: PaymentsActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updatePaymentsAction(item: any) {
    return {
        type: PaymentsActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectPaymentsAction(item: any) {
    return {
        type: PaymentsActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listPaymentsAction(item: any) {
    return {
        type: PaymentsActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deletePaymentsAction(item: any) {
    return {
        type: PaymentsActionTypes.DELETE,
        payload: {
            item,
        }
    }
}