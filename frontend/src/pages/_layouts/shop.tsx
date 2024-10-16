import { Outlet } from "react-router-dom";
import { AddressesProvider } from "../contexts/addresses-context";

export const ShopLayout = function () {
  return (
    <>
      <Outlet />
    </>
  );
};
