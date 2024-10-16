import { UserTypesReducerType } from "./reducer"

export enum UserTypesActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type UserTypesActions = {
    type: 
        | UserTypesActionTypes.CREATE
        | UserTypesActionTypes.DELETE
        | UserTypesActionTypes.LIST
        | UserTypesActionTypes.SELECT
        | UserTypesActionTypes.UPDATE,
    payload: {
        item: UserTypesReducerType
    }
}



export function createUserTypesAction(item: any) {
    return {
        type: UserTypesActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateUserTypesAction(item: any) {
    return {
        type: UserTypesActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectUserTypesAction(item: any) {
    return {
        type: UserTypesActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listUserTypesAction(item: any) {
    return {
        type: UserTypesActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteUserTypesAction(item: any) {
    return {
        type: UserTypesActionTypes.DELETE,
        payload: {
            item,
        }
    }
}