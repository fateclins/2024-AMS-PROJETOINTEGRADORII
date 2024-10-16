import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface SubcategoriesContextTypes {}

export const SubcategoriesContext = createContext(
  {} as SubcategoriesContextTypes,
);

interface SubcategoriesProviderProps {
  children: ReactNode;
}

export function SubcategoriesProvider({
  children,
}: SubcategoriesProviderProps) {
  return (
    <SubcategoriesContext.Provider value={{}}>
      {children}
    </SubcategoriesContext.Provider>
  );
}

export const useSubcategoriesContext = function () {
  const context = useContextSelector(SubcategoriesContext, (context) => {
    return context;
  });

  if (!context)
    throw new Error(
      "useSubcategoriesContext must be used within SubcategoriesProvider",
    );
  return context;
};
