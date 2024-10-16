import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface StoresContextTypes {}

export const StoresContext = createContext({} as StoresContextTypes);

interface StoresProviderProps {
  children: ReactNode;
}

export function StoresProvider({ children }: StoresProviderProps) {
  return <StoresContext.Provider value={{}}>{children}</StoresContext.Provider>;
}

export const useStoresContext = function () {
  const context = useContextSelector(StoresContext, (context) => {
    return context;
  });

  if (!context)
    throw new Error("useStoresContext must be used within StoresProvider");
  return context;
};
