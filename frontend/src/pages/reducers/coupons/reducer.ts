import { CouponsActions, CouponsActionTypes } from "./actions";

import { produce } from "immer";

export interface CouponsReducerType {
  id: number;
  country: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: number;
  complement: string;
  userId: number;
}

export interface CouponsReducerType {
  coupons: CouponsReducerType[];
}

export function couponsReducer(
  state: CouponsReducerType,
  action: CouponsActions,
) {
  switch (action.type) {
    case OrderItemsActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.orderItems.push(action.payload.data);
      });
    case OrderItemsActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.orderItems.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.orderItems.splice(findIndex, 1);
        }
      });
    case OrderItemsActionTypes.LIST:
      return produce(state, function (draft) {
        draft.orderItems;
      });
    case OrderItemsActionTypes.SELECT:
    // implement
    case OrderItemsActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.orderItems.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.orderItems[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
