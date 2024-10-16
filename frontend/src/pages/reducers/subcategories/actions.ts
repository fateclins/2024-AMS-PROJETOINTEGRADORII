import { SubcategoriesReducerType } from "./reducer"

export enum SubcategoriesActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type SubcategoriesActions = {
    type: 
        | SubcategoriesActionTypes.CREATE
        | SubcategoriesActionTypes.DELETE
        | SubcategoriesActionTypes.LIST
        | SubcategoriesActionTypes.SELECT
        | SubcategoriesActionTypes.UPDATE,
    payload: {
        item: SubcategoriesReducerType
    }
}



export function createSubcategoriesAction(item: any) {
    return {
        type: SubcategoriesActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateSubcategoriesAction(item: any) {
    return {
        type: SubcategoriesActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectSubcategoriesAction(item: any) {
    return {
        type: SubcategoriesActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listSubcategoriesAction(item: any) {
    return {
        type: SubcategoriesActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteSubcategoriesAction(item: any) {
    return {
        type: SubcategoriesActionTypes.DELETE,
        payload: {
            item,
        }
    }
}