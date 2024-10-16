import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  AddressesReducerType,
  addressesReducer,
} from "../reducers/addresses/reducer";
import {
  createAddressesAction,
  deleteAddressesAction,
  listAddressesAction,
  selectAddressesAction,
  updateAddressesAction,
} from "../reducers/addresses/actions";

interface AddressesContextTypes {
  addressesState: AddressesReducerType;
  createAddresses(data: AddressesReducerType): void;
  updateAddresses(data: AddressesReducerType): void;
  selectAddresses(data: AddressesReducerType): void;
  listAddresses(data: AddressesReducerType): void;
  deleteAddresses(data: AddressesReducerType): void;
}

export const AddressesContext = createContext<AddressesContextTypes>(
  {} as AddressesContextTypes,
);

interface AddressesProviderProps {
  children: ReactNode;
}

export function AddressesProvider({ children }: AddressesProviderProps) {
  const [addressesState, addressesDispatcher] = useReducer(addressesReducer, {
    addresses: [],
  });

  function createAddresses(data: AddressesReducerType) {
    addressesDispatcher(createAddressesAction(data));
  }

  function updateAddresses(data: AddressesReducerType) {
    addressesDispatcher(updateAddressesAction(data));
  }

  function selectAddresses(data: AddressesReducerType) {
    addressesDispatcher(selectAddressesAction(data));
  }

  function listAddresses(data: AddressesReducerType) {
    addressesDispatcher(listAddressesAction(data));
  }

  function deleteAddresses(data: AddressesReducerType) {
    addressesDispatcher(deleteAddressesAction(data));
  }

  return (
    <AddressesContext.Provider
      value={{
        addressesState,
        createAddresses,
        updateAddresses,
        listAddresses,
        deleteAddresses,
        selectAddresses,
      }}
    >
      {children}
    </AddressesContext.Provider>
  );
}

export const useAddressesContext = function () {
  const context = useContextSelector(AddressesContext, (context) => {
    return context;
  });

  console.log(context);

  if (!context)
    throw new Error(
      "useAddressesContext must be used within AddressesProvider",
    );
  return context;
};
