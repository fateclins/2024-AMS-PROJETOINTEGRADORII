import { ByProductReducerType } from "./reducer"

export enum ByProductActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type ByProductActions = {
    type: 
        | ByProductActionTypes.CREATE
        | ByProductActionTypes.DELETE
        | ByProductActionTypes.LIST
        | ByProductActionTypes.SELECT
        | ByProductActionTypes.UPDATE,
    payload: {
        item: ByProductReducerType
    }
}



export function createByProductAction(item: any) {
    return {
        type: ByProductActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateByProductAction(item: any) {
    return {
        type: ByProductActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectByProductAction(item: any) {
    return {
        type: ByProductActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listByProductAction(item: any) {
    return {
        type: ByProductActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteByProductAction(item: any) {
    return {
        type: ByProductActionTypes.DELETE,
        payload: {
            item,
        }
    }
}