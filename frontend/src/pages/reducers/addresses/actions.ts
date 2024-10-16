import { AddressesReducerType } from "./reducer"

export enum AddressesActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type AddressesActions = {
    type: 
        | AddressesActionTypes.CREATE
        | AddressesActionTypes.DELETE
        | AddressesActionTypes.LIST
        | AddressesActionTypes.SELECT
        | AddressesActionTypes.UPDATE,
    payload: {
        item: AddressesReducerType
    }
}



export function createAddressesAction(item: any) {
    return {
        type: AddressesActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateAddressesAction(item: any) {
    return {
        type: AddressesActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectAddressesAction(item: any) {
    return {
        type: AddressesActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listAddressesAction(item: any) {
    return {
        type: AddressesActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteAddressesAction(item: any) {
    return {
        type: AddressesActionTypes.DELETE,
        payload: {
            item,
        }
    }
}