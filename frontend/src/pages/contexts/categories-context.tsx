import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface CategoriesContextTypes {}

export const CategoriesContext = createContext({} as CategoriesContextTypes)

interface CategoriesProviderProps {
    children: ReactNode
}

export function CategoriesProvider({ children }: CategoriesProviderProps) {
    return (
        <CategoriesContext.Provider value={{}}>
            { children }
        </CategoriesContext.Provider>
    )
}

export const useCategoriesContext = <T, >(selector: (context: CategoriesContextTypes) => T) => {
    const context = useContextSelector(CategoriesContext, selector);

    if (!context) throw new Error('useCategoriesContext must be used within CategoriesProvider');
        return context;
};
