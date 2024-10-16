import { UsersReducerType } from "./reducer"

export enum UsersActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type UsersActions = {
    type: 
        | UsersActionTypes.CREATE
        | UsersActionTypes.DELETE
        | UsersActionTypes.LIST
        | UsersActionTypes.SELECT
        | UsersActionTypes.UPDATE,
    payload: {
        item: UsersReducerType
    }
}



export function createUsersAction(item: any) {
    return {
        type: UsersActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateUsersAction(item: any) {
    return {
        type: UsersActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectUsersAction(item: any) {
    return {
        type: UsersActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listUsersAction(item: any) {
    return {
        type: UsersActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteUsersAction(item: any) {
    return {
        type: UsersActionTypes.DELETE,
        payload: {
            item,
        }
    }
}