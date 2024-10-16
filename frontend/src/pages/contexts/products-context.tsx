import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface ProductsContextTypes {}

export const ProductsContext = createContext({} as ProductsContextTypes);

interface ProductsProviderProps {
  children: ReactNode;
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  return (
    <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
  );
}

export const useProductsContext = function () {
  const context = useContextSelector(ProductsContext, (context) => {
    return context;
  });

  if (!context)
    throw new Error("useProductsContext must be used within ProductsProvider");
  return context;
};
