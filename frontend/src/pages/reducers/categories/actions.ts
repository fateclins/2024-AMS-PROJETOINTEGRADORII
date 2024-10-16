import { CategoriesReducerType } from "./reducer"

export enum CategoriesActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type CategoriesActions = {
    type: 
        | CategoriesActionTypes.CREATE
        | CategoriesActionTypes.DELETE
        | CategoriesActionTypes.LIST
        | CategoriesActionTypes.SELECT
        | CategoriesActionTypes.UPDATE,
    payload: {
        item: CategoriesReducerType
    }
}



export function createCategoriesAction(item: any) {
    return {
        type: CategoriesActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateCategoriesAction(item: any) {
    return {
        type: CategoriesActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectCategoriesAction(item: any) {
    return {
        type: CategoriesActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listCategoriesAction(item: any) {
    return {
        type: CategoriesActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteCategoriesAction(item: any) {
    return {
        type: CategoriesActionTypes.DELETE,
        payload: {
            item,
        }
    }
}