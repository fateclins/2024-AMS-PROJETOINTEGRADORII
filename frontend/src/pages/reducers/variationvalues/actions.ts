import { VariationValuesReducerType } from "./reducer"

export enum VariationValuesActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type VariationValuesActions = {
    type: 
        | VariationValuesActionTypes.CREATE
        | VariationValuesActionTypes.DELETE
        | VariationValuesActionTypes.LIST
        | VariationValuesActionTypes.SELECT
        | VariationValuesActionTypes.UPDATE,
    payload: {
        item: VariationValuesReducerType
    }
}



export function createVariationValuesAction(item: any) {
    return {
        type: VariationValuesActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateVariationValuesAction(item: any) {
    return {
        type: VariationValuesActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectVariationValuesAction(item: any) {
    return {
        type: VariationValuesActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listVariationValuesAction(item: any) {
    return {
        type: VariationValuesActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteVariationValuesAction(item: any) {
    return {
        type: VariationValuesActionTypes.DELETE,
        payload: {
            item,
        }
    }
}