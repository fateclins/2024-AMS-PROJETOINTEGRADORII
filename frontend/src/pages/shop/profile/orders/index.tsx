import { MagnifyingGlass } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";

import { Input } from "@/components/ui/input";

import { OrderItem } from "./components/order-item";
import { listOrders } from "@/api/shop/orders/list";

export function Orders() {
  const { data: ordersData, isLoading: isOrdersDataLoading } = listOrders();

  console.log(ordersData);

  return (
    <>
      <Helmet title="Pedidos" />
      <div className="space-y-2.5">
        <div className="flex w-full justify-between">
          <h2 className="text-xl font-semibold">Meus Pedidos</h2>
          <form className="relative">
            <Input placeholder="Pesquisar" className="h-9 pl-8" />

            <MagnifyingGlass className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2" />
          </form>
        </div>
        <div className="w-full">
          {Array.from({ length: 4 }).map((_, index) => {
            return <OrderItem key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
