import { PaymentReducerType } from "./reducer";

export enum PaymentsActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  SELECT = "SELECT",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type PaymentsActions = {
  type:
    | PaymentsActionTypes.CREATE
    | PaymentsActionTypes.DELETE
    | PaymentsActionTypes.LIST
    | PaymentsActionTypes.SELECT
    | PaymentsActionTypes.UPDATE;
  payload: {
    data: PaymentReducerType;
  };
};

export function createPaymentsAction(data: PaymentReducerType) {
  return {
    type: PaymentsActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updatePaymentsAction(data: PaymentReducerType) {
  return {
    type: PaymentsActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function selectPaymentsAction(data: PaymentReducerType) {
  return {
    type: PaymentsActionTypes.SELECT,
    payload: {
      data,
    },
  };
}

export function listPaymentsAction(data: PaymentReducerType) {
  return {
    type: PaymentsActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deletePaymentsAction(data: PaymentReducerType) {
  return {
    type: PaymentsActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
