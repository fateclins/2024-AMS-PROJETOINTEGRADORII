import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface VariationDescriptionsContextTypes {}

export const VariationDescriptionsContext = createContext({} as VariationDescriptionsContextTypes)

interface VariationDescriptionsProviderProps {
    children: ReactNode
}

export function VariationDescriptionsProvider({ children }: VariationDescriptionsProviderProps) {
    return (
        <VariationDescriptionsContext.Provider value={{}}>
            { children }
        </VariationDescriptionsContext.Provider>
    )
}

export const useVariationDescriptionsContext = <T, >(selector: (context: VariationDescriptionsContextTypes) => T) => {
    const context = useContextSelector(VariationDescriptionsContext, selector);

    if (!context) throw new Error('useVariationDescriptionsContext must be used within VariationDescriptionsProvider');
        return context;
};
