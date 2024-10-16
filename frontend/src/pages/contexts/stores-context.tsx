import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface StoresContextTypes {}

export const StoresContext = createContext({} as StoresContextTypes)

interface StoresProviderProps {
    children: ReactNode
}

export function StoresProvider({ children }: StoresProviderProps) {
    return (
        <StoresContext.Provider value={{}}>
            { children }
        </StoresContext.Provider>
    )
}

export const useStoresContext = <T, >(selector: (context: StoresContextTypes) => T) => {
    const context = useContextSelector(StoresContext, selector);

    if (!context) throw new Error('useStoresContext must be used within StoresProvider');
        return context;
};
