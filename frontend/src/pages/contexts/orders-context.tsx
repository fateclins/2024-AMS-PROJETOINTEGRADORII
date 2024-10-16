import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface OrdersContextTypes {}

export const OrdersContext = createContext({} as OrdersContextTypes);

interface OrdersProviderProps {
  children: ReactNode;
}

export function OrdersProvider({ children }: OrdersProviderProps) {
  return <OrdersContext.Provider value={{}}>{children}</OrdersContext.Provider>;
}

export const useOrdersContext = function () {
  const context = useContextSelector(OrdersContext, (context) => {
    return context;
  });

  if (!context)
    throw new Error("useOrdersContext must be used within OrdersProvider");
  return context;
};
