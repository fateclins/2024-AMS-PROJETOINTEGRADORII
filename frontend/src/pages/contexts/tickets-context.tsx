import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface TicketsContextTypes {}

export const TicketsContext = createContext({} as TicketsContextTypes)

interface TicketsProviderProps {
    children: ReactNode
}

export function TicketsProvider({ children }: TicketsProviderProps) {
    return (
        <TicketsContext.Provider value={{}}>
            { children }
        </TicketsContext.Provider>
    )
}

export const useTicketsContext = <T, >(selector: (context: TicketsContextTypes) => T) => {
    const context = useContextSelector(TicketsContext, selector);

    if (!context) throw new Error('useTicketsContext must be used within TicketsProvider');
        return context;
};
