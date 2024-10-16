import { CouponsReducerType } from "./reducer"

export enum CouponsActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type CouponsActions = {
    type: 
        | CouponsActionTypes.CREATE
        | CouponsActionTypes.DELETE
        | CouponsActionTypes.LIST
        | CouponsActionTypes.SELECT
        | CouponsActionTypes.UPDATE,
    payload: {
        item: CouponsReducerType
    }
}



export function createCouponsAction(item: any) {
    return {
        type: CouponsActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateCouponsAction(item: any) {
    return {
        type: CouponsActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectCouponsAction(item: any) {
    return {
        type: CouponsActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listCouponsAction(item: any) {
    return {
        type: CouponsActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteCouponsAction(item: any) {
    return {
        type: CouponsActionTypes.DELETE,
        payload: {
            item,
        }
    }
}