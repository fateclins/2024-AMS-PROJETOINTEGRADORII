import { StoreReducerType } from "./reducer";

export enum StoresActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  SELECT = "SELECT",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type StoresActions = {
  type:
    | StoresActionTypes.CREATE
    | StoresActionTypes.DELETE
    | StoresActionTypes.LIST
    | StoresActionTypes.SELECT
    | StoresActionTypes.UPDATE;
  payload: {
    data: StoreReducerType;
  };
};

export function createStoresAction(data: StoreReducerType) {
  return {
    type: StoresActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateStoresAction(data: StoreReducerType) {
  return {
    type: StoresActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function selectStoresAction(data: StoreReducerType) {
  return {
    type: StoresActionTypes.SELECT,
    payload: {
      data,
    },
  };
}

export function listStoresAction(data: StoreReducerType) {
  return {
    type: StoresActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteStoresAction(data: StoreReducerType) {
  return {
    type: StoresActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
