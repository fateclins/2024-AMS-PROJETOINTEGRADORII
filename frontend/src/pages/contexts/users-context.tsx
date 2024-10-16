import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface UsersContextTypes {}

export const UsersContext = createContext({} as UsersContextTypes)

interface UsersProviderProps {
    children: ReactNode
}

export function UsersProvider({ children }: UsersProviderProps) {
    return (
        <UsersContext.Provider value={{}}>
            { children }
        </UsersContext.Provider>
    )
}

export const useUsersContext = <T, >(selector: (context: UsersContextTypes) => T) => {
    const context = useContextSelector(UsersContext, selector);

    if (!context) throw new Error('useUsersContext must be used within UsersProvider');
        return context;
};
