import { VariationDescriptionsReducerType } from "./reducer"

export enum VariationDescriptionsActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type VariationDescriptionsActions = {
    type: 
        | VariationDescriptionsActionTypes.CREATE
        | VariationDescriptionsActionTypes.DELETE
        | VariationDescriptionsActionTypes.LIST
        | VariationDescriptionsActionTypes.SELECT
        | VariationDescriptionsActionTypes.UPDATE,
    payload: {
        item: VariationDescriptionsReducerType
    }
}



export function createVariationDescriptionsAction(item: any) {
    return {
        type: VariationDescriptionsActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateVariationDescriptionsAction(item: any) {
    return {
        type: VariationDescriptionsActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectVariationDescriptionsAction(item: any) {
    return {
        type: VariationDescriptionsActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listVariationDescriptionsAction(item: any) {
    return {
        type: VariationDescriptionsActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteVariationDescriptionsAction(item: any) {
    return {
        type: VariationDescriptionsActionTypes.DELETE,
        payload: {
            item,
        }
    }
}