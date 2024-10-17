import { ByproductReducerType } from "./reducer";

export enum ByproductsActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  SELECT = "SELECT",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type ByproductsActions = {
  type:
    | ByproductsActionTypes.CREATE
    | ByproductsActionTypes.DELETE
    | ByproductsActionTypes.LIST
    | ByproductsActionTypes.SELECT
    | ByproductsActionTypes.UPDATE,
  payload: {
    data: ByproductReducerType;
  };
};

export function createByproductsAction(data: ByproductReducerType) {
  return {
    type: ByproductsActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateByproductsAction(data: ByproductReducerType) {
  return {
    type: ByproductsActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function selectByproductsAction(data: ByproductReducerType) {
  return {
    type: ByproductsActionTypes.SELECT,
    payload: {
      data,
    },
  };
}

export function listByproductsAction(data: ByproductReducerType) {
  return {
    type: ByproductsActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteByproductsAction(data: ByproductReducerType) {
  return {
    type: ByproductsActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
