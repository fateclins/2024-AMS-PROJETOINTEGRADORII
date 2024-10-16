import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface UserTypesContextTypes {}

export const UserTypesContext = createContext({} as UserTypesContextTypes)

interface UserTypesProviderProps {
    children: ReactNode
}

export function UserTypesProvider({ children }: UserTypesProviderProps) {
    return (
        <UserTypesContext.Provider value={{}}>
            { children }
        </UserTypesContext.Provider>
    )
}

export const useUserTypesContext = <T, >(selector: (context: UserTypesContextTypes) => T) => {
    const context = useContextSelector(UserTypesContext, selector);

    if (!context) throw new Error('useUserTypesContext must be used within UserTypesProvider');
        return context;
};
