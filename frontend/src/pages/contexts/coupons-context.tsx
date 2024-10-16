import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface CouponsContextTypes {}

export const CouponsContext = createContext({} as CouponsContextTypes)

interface CouponsProviderProps {
    children: ReactNode
}

export function CouponsProvider({ children }: CouponsProviderProps) {
    return (
        <CouponsContext.Provider value={{}}>
            { children }
        </CouponsContext.Provider>
    )
}

export const useCouponsContext = <T, >(selector: (context: CouponsContextTypes) => T) => {
    const context = useContextSelector(CouponsContext, selector);

    if (!context) throw new Error('useCouponsContext must be used within CouponsProvider');
        return context;
};
