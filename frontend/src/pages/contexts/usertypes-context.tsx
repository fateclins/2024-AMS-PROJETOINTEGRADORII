import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface UserTypesContextTypes {}

export const UserTypesContext = createContext({} as UserTypesContextTypes);

interface UserTypesProviderProps {
  children: ReactNode;
}

export function UserTypesProvider({ children }: UserTypesProviderProps) {
  return (
    <UserTypesContext.Provider value={{}}>{children}</UserTypesContext.Provider>
  );
}

export const useUserTypesContext = function () {
  const context = useContextSelector(UserTypesContext, (context) => {
    return context;
  });

  if (!context)
    throw new Error(
      "useUserTypesContext must be used within UserTypesProvider",
    );
  return context;
};
