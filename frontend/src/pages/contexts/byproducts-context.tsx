import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  ByproductsReducerType,
  byproductsReducer,
} from "../reducers/byproducts/reducer";
import {
  createByproductsAction,
  deleteByproductsAction,
  listByproductsAction,
  selectByproductsAction,
  updateByproductsAction,
} from "../reducers/byproducts/actions";

interface ByproductsContextTypes {
  byproductsState: ByproductsReducerType;
  createByproducts(data: ByproductsReducerType): void;
  updateByproducts(data: ByproductsReducerType): void;
  selectByproducts(data: ByproductsReducerType): void;
  listByproducts(data: ByproductsReducerType): void;
  deleteByproducts(data: ByproductsReducerType): void;
}

export const ByproductsContext = createContext<ByproductsContextTypes>(
  {} as ByproductsContextTypes,
);

interface ByproductsProviderProps {
  children: ReactNode;
}

export function ByproductsProvider({ children }: ByproductsProviderProps) {
  const [byproductsState, byproductsDispatcher] = useReducer(
    byproductsReducer,
    {
      byproducts: [],
    },
  );

  function createByproducts(data: ByproductsReducerType) {
    byproductsDispatcher(createByproductsAction(data));
  }

  function updateByproducts(data: ByproductsReducerType) {
    byproductsDispatcher(updateByproductsAction(data));
  }

  function selectByproducts(data: ByproductsReducerType) {
    byproductsDispatcher(selectByproductsAction(data));
  }

  function listByproducts(data: ByproductsReducerType) {
    byproductsDispatcher(listByproductsAction(data));
  }

  function deleteByproducts(data: ByproductsReducerType) {
    byproductsDispatcher(deleteByproductsAction(data));
  }

  return (
    <ByproductsContext.Provider
      value={{
        byproductsState,
        createByproducts,
        updateByproducts,
        listByproducts,
        deleteByproducts,
        selectByproducts,
      }}
    >
      {children}
    </ByproductsContext.Provider>
  );
}

export const useByproductsContext = function () {
  const context = useContextSelector(ByproductsContext, (context) => {
    return context;
  });

  console.log(context);

  if (!context)
    throw new Error(
      "useByproductsContext must be used within ByproductsProvider",
    );
  return context;
};
