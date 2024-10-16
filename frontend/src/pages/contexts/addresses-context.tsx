import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface AddressesContextTypes {}

export const AddressesContext = createContext<AddressesContextTypes>({} as AddressesContextTypes)

interface AddressesProviderProps {
    children: ReactNode
}

export function AddressesProvider({ children }: AddressesProviderProps) {
    return (
        <AddressesContext.Provider value={{}}>
            { children }
        </AddressesContext.Provider>
    )
}

export const useAddressesContext = <T, >(selector: (context: AddressesContextTypes) => T) => {
    const context = useContextSelector(AddressesContext, selector);

    if (!context) throw new Error('useAddressesContext must be used within AddressesProvider');
        return context;
};