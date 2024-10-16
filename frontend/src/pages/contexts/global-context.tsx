import { ReactNode } from "react";
import { createContext } from "use-context-selector";

export const GlobalContext = createContext({});

interface GlobalProviderProps {
    children: ReactNode
}

export function GlobalProvider({ children }: GlobalProviderProps) {
    // const products = useProductsContext((context) => context.products)

    return (
        <GlobalContext.Provider value={{ /* products */ }}>
            { children }
        </GlobalContext.Provider>
    )
}