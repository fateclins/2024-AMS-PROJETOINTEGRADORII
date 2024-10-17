import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  OrderItemReducerType,
  OrderItemsReducerType,
  orderItemsReducer,
} from "../reducers/order-items/reducer";
import {
  createOrderItemsAction,
  deleteOrderItemsAction,
  listOrderItemsAction,
  selectOrderItemsAction,
  updateOrderItemsAction,
} from "../reducers/order-items/actions";

export interface OrderItemsContextTypes {
  orderItemsState: OrderItemsReducerType;
  createOrderItems(data: OrderItemReducerType): void;
  updateOrderItems(data: OrderItemReducerType): void;
  selectOrderItems(data: OrderItemReducerType): void;
  listOrderItems(data: OrderItemReducerType): void;
  deleteOrderItems(data: OrderItemReducerType): void;
}

export const OrderItemsContext = createContext<OrderItemsContextTypes>(
  {} as OrderItemsContextTypes,
);

interface OrderItemsProviderProps {
  children: ReactNode;
}

export function OrderItemsProvider({ children }: OrderItemsProviderProps) {
  const [orderItemsState, orderItemsDispatcher] = useReducer(orderItemsReducer, {
    orderItems: [],
  });

  function createOrderItems(data: OrderItemReducerType) {
    orderItemsDispatcher(createOrderItemsAction(data));
  }

  function updateOrderItems(data: OrderItemReducerType) {
    orderItemsDispatcher(updateOrderItemsAction(data));
  }

  function selectOrderItems(data: OrderItemReducerType) {
    orderItemsDispatcher(selectOrderItemsAction(data));
  }

  function listOrderItems(data: OrderItemReducerType) {
    orderItemsDispatcher(listOrderItemsAction(data));
  }

  function deleteOrderItems(data: OrderItemReducerType) {
    orderItemsDispatcher(deleteOrderItemsAction(data));
  }

  return (
    <OrderItemsContext.Provider
      value={{
        orderItemsState,
        createOrderItems,
        updateOrderItems,
        listOrderItems,
        deleteOrderItems,
        selectOrderItems,
      }}
    >
      {children}
    </OrderItemsContext.Provider>
  );
}

export const useOrderItemsContext = function () {
  const context = useContextSelector(OrderItemsContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useOrderItemsContext must be used within OrderItemsProvider",
    );
  return context;
};
