import { MagnifyingGlass } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";

import { Input } from "@/components/ui/input";

import { OrderItem } from "./components/order-item";
import { Skeleton } from "@/components/ui/skeleton";
import { listOrderItems } from "@/api/shop/order-items/list";

export function Orders() {
  const { data: orderItemsData, isLoading: isOrderItemsDataLoading } =
    listOrderItems();

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
          {isOrderItemsDataLoading === true ? (
            <Skeleton className="h-[400px] w-full" />
          ) : (
            orderItemsData?.map((item) => {
              return (
                <OrderItem
                  key={item.id}
                  id={item.id}
                  idProduct={item.idProduct}
                  itemValue={item.itemValue}
                  quantityOrdered={item.quantityOrdered}
                  quantityServed={item.quantityServed}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
