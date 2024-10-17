import { ProductReducerType } from "./reducer";

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
    data: ProductReducerType;
  };
};

export function createProductsAction(data: ProductReducerType) {
  return {
    type: ProductsActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateProductsAction(data: ProductReducerType) {
  return {
    type: ProductsActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function selectProductsAction(data: ProductReducerType) {
  return {
    type: ProductsActionTypes.SELECT,
    payload: {
      data,
    },
  };
}

export function listProductsAction(data: ProductReducerType) {
  return {
    type: ProductsActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteProductsAction(data: ProductReducerType) {
  return {
    type: ProductsActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
