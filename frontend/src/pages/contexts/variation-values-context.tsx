import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface VariationValuesContextTypes {}

export const VariationValuesContext = createContext({} as VariationValuesContextTypes)

interface VariationValuesProviderProps {
    children: ReactNode
}

export function VariationValuesProvider({ children }: VariationValuesProviderProps) {
    return (
        <VariationValuesContext.Provider value={{}}>
            { children }
        </VariationValuesContext.Provider>
    )
}

export const useVariationValuesContext = <T, >(selector: (context: VariationValuesContextTypes) => T) => {
    const context = useContextSelector(VariationValuesContext, selector);

    if (!context) throw new Error('useVariationValuesContext must be used within VariationValuesProvider');
        return context;
};
