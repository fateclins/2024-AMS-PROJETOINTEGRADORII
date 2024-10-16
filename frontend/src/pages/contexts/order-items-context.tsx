import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface OrderItemsContextTypes {}

export const OrderItemsContext = createContext({} as OrderItemsContextTypes)

interface OrderItemsProviderProps {
    children: ReactNode
}

export function OrderItemsProvider({ children }: OrderItemsProviderProps) {
    return (
        <OrderItemsContext.Provider value={{}}>
            { children }
        </OrderItemsContext.Provider>
    )
}

export const useOrderItemsContext = <T, >(selector: (context: OrderItemsContextTypes) => T) => {
    const context = useContextSelector(OrderItemsContext, selector);

    if (!context) throw new Error('useOrderItemsContext must be used within OrderItemsProvider');
        return context;
};
