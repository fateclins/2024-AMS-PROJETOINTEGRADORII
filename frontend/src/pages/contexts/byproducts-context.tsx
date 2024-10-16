import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface ByproductContextTypes {}

export const ByproductContext = createContext<ByproductContextTypes>({} as ByproductContextTypes)

interface ByproductProviderProps {
    children: ReactNode
}

export function ByproductProvider({ children }: ByproductProviderProps) {
    return (
        <ByproductContext.Provider value={{}}>
            { children }
        </ByproductContext.Provider>
    )
}

export const useByproductContext = <T, >(selector: (context: ByproductContextTypes) => T) => {
    const context = useContextSelector(ByproductContext, selector);

    if (!context) throw new Error('useByproductContext must be used within ByproductProvider');
        return context;
};