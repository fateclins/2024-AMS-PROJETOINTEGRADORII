import { StoresReducerType } from "./reducer"

export enum StoresActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type StoresActions = {
    type: 
        | StoresActionTypes.CREATE
        | StoresActionTypes.DELETE
        | StoresActionTypes.LIST
        | StoresActionTypes.SELECT
        | StoresActionTypes.UPDATE,
    payload: {
        item: StoresReducerType
    }
}



export function createStoresAction(item: any) {
    return {
        type: StoresActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateStoresAction(item: any) {
    return {
        type: StoresActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectStoresAction(item: any) {
    return {
        type: StoresActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listStoresAction(item: any) {
    return {
        type: StoresActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteStoresAction(item: any) {
    return {
        type: StoresActionTypes.DELETE,
        payload: {
            item,
        }
    }
}