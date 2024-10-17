import { OrderReducerType } from "./reducer";

export enum OrdersActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  SELECT = "SELECT",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type OrdersActions = {
  type:
    | OrdersActionTypes.CREATE
    | OrdersActionTypes.DELETE
    | OrdersActionTypes.LIST
    | OrdersActionTypes.SELECT
    | OrdersActionTypes.UPDATE,
  payload: {
    data: OrderReducerType;
  };
};

export function createOrdersAction(data: OrderReducerType) {
  return {
    type: OrdersActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateOrdersAction(data: OrderReducerType) {
  return {
    type: OrdersActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function selectOrdersAction(data: OrderReducerType) {
  return {
    type: OrdersActionTypes.SELECT,
    payload: {
      data,
    },
  };
}

export function listOrdersAction(data: OrderReducerType) {
  return {
    type: OrdersActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteOrdersAction(data: OrderReducerType) {
  return {
    type: OrdersActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
