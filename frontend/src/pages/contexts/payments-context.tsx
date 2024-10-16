import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface PaymentsContextTypes {}

export const PaymentsContext = createContext({} as PaymentsContextTypes);

interface PaymentsProviderProps {
  children: ReactNode;
}

export function PaymentsProvider({ children }: PaymentsProviderProps) {
  return (
    <PaymentsContext.Provider value={{}}>{children}</PaymentsContext.Provider>
  );
}

export const usePaymentsContext = function () {
  const context = useContextSelector(PaymentsContext, (context) => {
    return context;
  });

  if (!context)
    throw new Error("usePaymentsContext must be used within PaymentsProvider");
  return context;
};
