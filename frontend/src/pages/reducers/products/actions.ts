import { ProductsReducerType } from "./reducer"

export enum ProductsActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    SELECT = "SELECT",
    LIST = "LIST",
    DELETE = "DELETE",
}

export type ProductsActions = {
    type: 
        | ProductsActionTypes.CREATE
        | ProductsActionTypes.DELETE
        | ProductsActionTypes.LIST
        | ProductsActionTypes.SELECT
        | ProductsActionTypes.UPDATE,
    payload: {
        item: ProductsReducerType
    }
}



export function createProductsAction(item: any) {
    return {
        type: ProductsActionTypes.CREATE,
        payload: {
            item,
        }
    }
}

export function updateProductsAction(item: any) {
    return {
        type: ProductsActionTypes.UPDATE,
        payload: {
            item,
        }
    }
}

export function selectProductsAction(item: any) {
    return {
        type: ProductsActionTypes.SELECT,
        payload: {
            item,
        }
    }
}

export function listProductsAction(item: any) {
    return {
        type: ProductsActionTypes.LIST,
        payload: {
            item,
        }
    }
}

export function deleteProductsAction(item: any) {
    return {
        type: ProductsActionTypes.DELETE,
        payload: {
            item,
        }
    }
}