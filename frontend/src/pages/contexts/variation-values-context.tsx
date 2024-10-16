import { ReactNode } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface VariationValuesContextTypes {}

export const VariationValuesContext = createContext(
  {} as VariationValuesContextTypes,
);

interface VariationValuesProviderProps {
  children: ReactNode;
}

export function VariationValuesProvider({
  children,
}: VariationValuesProviderProps) {
  return (
    <VariationValuesContext.Provider value={{}}>
      {children}
    </VariationValuesContext.Provider>
  );
}

export const useVariationValuesContext = function () {
  const context = useContextSelector(VariationValuesContext, (context) => {
    return context;
  });

  if (!context)
    throw new Error(
      "useVariationValuesContext must be used within VariationValuesProvider",
    );
  return context;
};
