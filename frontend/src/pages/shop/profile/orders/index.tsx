import { MagnifyingGlass } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";

import { Input } from "@/components/ui/input";

import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {  Pencil, Search, Trash } from "lucide-react";
import { Pagination } from "@/components/pagination";
import { listOrders } from "@/api/shop/orders/list";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@/components/label";
import { useState } from "react";
import { createOrder } from "@/api/shop/orders/create";
import { updateOrder } from "@/api/shop/orders/update";
import { deleteOrder } from "@/api/shop/orders/delete";
import { toast } from "sonner";

export function Orders() {
  const { data: ordersData, isLoading: isOrdersDataLoading } =
    listOrders();


  const [searchParams, setSearchParams] = useSearchParams();
  
  const pageIndex = z.coerce
  .number()
  .transform((page) => page - 1)
  .parse(searchParams.get("page") ?? "1");
  
  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set("page", (pageIndex + 1).toString());
      
      return state;
    });
  }
  
  const ordersSizeData = ordersData?.length;
  const itemsPerPage = 10;
  const startIndex = pageIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const orderValidationSchema = z.object({
    id: z.coerce.number(),
    totalValue: z.coerce.number(),
    date: z.string(),
    status: z.string(),
    finalValue: z.coerce.number(),
    discount: z.coerce.number(),
    idUser: z.coerce.number(),
  })

  type OrderValidationSchema = z.infer<typeof orderValidationSchema>

  const { handleSubmit, control, reset } = useForm<OrderValidationSchema>({
    resolver: zodResolver(orderValidationSchema),
    values: {
      date: "",
      discount: 0,
      finalValue: 0,
      id: 0,
      idUser: 0,
      status: "",
      totalValue: 0,
    }
  })

  const [_, setSelectedItem] = useState<any>(null);

    const { mutateAsync: updateOrderData } = updateOrder();
    const { mutateAsync: deleteOrderData } = deleteOrder();

    const handleSelectItem = (item: OrderValidationSchema) => {
      setSelectedItem(item),
      reset(item)
    }

    const onError = (errors: any) => {
      console.log("Erros de validação:", errors);
    };

    async function handleUpdateOrder(data: OrderValidationSchema) {
      console.log(data)
      try {
        await updateOrderData({
          id: data.id,
          date: new Date(data.date),
          discount: data.discount,
          finalValue: data.finalValue,
          idUser: data.idUser,
          status: data.status,
          totalValue: data.totalValue,
        });

        toast.success("Pedido atualizado com sucesso.");
      } catch (error) {
        toast.error("Falha ao atualizar o pedido");
      }
      reset();
    }

    const handleDeleteOrder = async (data: OrderValidationSchema) => {
      try {
        await deleteOrderData({
            id: data.id
        });
        toast.success("Pedido deletado com sucesso.");
      } catch (error) {
        toast.error("Falha ao deletar o pedido");
      }
      reset();
    }

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
          <div className="rounded-md border mb-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead>Data de Pagamento</TableHead>
                  <TableHead>Valor Total</TableHead>
                  <TableHead>Valor Final</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Desconto</TableHead>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[64px]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="w-full">
                {isOrdersDataLoading === true ? (
                  <TableRow>
                    <TableCell>
                      <Skeleton className="h-10 w-full" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-full" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-full" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-full" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-full" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-full" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-full" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-full" />
                    </TableCell>
                  </TableRow>
                ) : (
                  ordersData?.slice(startIndex, endIndex).map((item) => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="xs">
                                <Search className="h-3 w-3" />
                                <span className="sr-only">
                                  Detalhes do pedido
                                </span>
                              </Button>
                            </DialogTrigger>

                            <DialogContent className="max-h-[90vh] sm:max-h-full w-full max-w-[90vw] sm:max-w-md overflow-y-auto sm:overflow-visible">
                              <DialogHeader>
                                <DialogTitle>Detalhes do pedido</DialogTitle>
                                <DialogDescription>
                                  Veja todos os detalhes do pedido.
                                </DialogDescription>
                              </DialogHeader>

                              <form className="space-y-4">
                                <div className="flex flex-col items-center gap-2 lg:flex-row">
                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Data de pagamento</Label>
                                    <Input type="text" className="h-9" value={item.date} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Valor total</Label>
                                    <Input type="text" className="h-9" value={item.totalValue} disabled />
                                  </div>
                                </div>

                                <div className="flex flex-col items-center gap-2 lg:flex-row">
                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Valor final</Label>
                                    <Input type="text" className="h-9" value={item.finalValue} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Status</Label>
                                    <Input type="text" className="h-9" value={item.status} disabled />
                                  </div>
                                </div>

                                <div className="w-6/12">
                                  <Label className="text-sm font-medium">Desconto</Label>
                                  <Input type="text" className="h-9" value={item.discount} disabled />
                                </div>

                                <div className="flex items-center justify-end gap-2">
                                  <DialogClose asChild>
                                    <Button type="button" variant="ghost">
                                      Cancelar
                                    </Button>
                                  </DialogClose>
                                </div>
                              </form>
                            </DialogContent>
                          </Dialog>

                        </TableCell>
                        <TableCell className="font-mono text-xs font-medium">
                          {item.date}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {item.totalValue}
                        </TableCell>
                        <TableCell>
                          {item.finalValue}
                        </TableCell>
                        <TableCell>
                          {item.status}
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.discount}
                        </TableCell>
                        <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="icon" variant="ghost" onClick={() => handleSelectItem(item)}>
                              <Pencil className="size-4" />
                              <span className="sr-only">Editar produto</span>
                            </Button>
                          </DialogTrigger>

                          <DialogContent className="max-h-[90vh] sm:max-h-full w-full max-w-[90vw] sm:max-w-md overflow-y-auto sm:overflow-visible">
                              <DialogHeader>
                                <DialogTitle>Editar o produto</DialogTitle>
                                <DialogDescription>
                                  Veja todos os detalhes da produto.
                                </DialogDescription>
                              </DialogHeader>

                              <form className="space-y-4" onSubmit={handleSubmit(handleUpdateOrder, onError)}>
                                <Controller
                                  name="totalValue"
                                  control={control}
                                  defaultValue={item.totalValue}
                                  rules={{ required: { message: "Digite o valor.", value: true },  }}
                                  render={({ field, fieldState: { error } }) => {
                                    return (
                                      <div className="w-full">
                                        <Label className="text-sm font-medium">Valor total</Label>
                                        <Input {...field} type="number" className="h-9" />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                      </div>
                                    )
                                  }}
                                />

                                <Controller
                                  name="finalValue"
                                  control={control}
                                  defaultValue={item.finalValue}
                                  rules={{ required: { message: "Digite o valor.", value: true },  }}
                                  render={({ field, fieldState: { error } }) => {
                                    return (
                                      <div className="w-full">
                                        <Label className="text-sm font-medium">Valor final</Label>
                                        <Input {...field} type="text" className="h-9" />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                      </div>
                                    )
                                  }}
                                />

                                <Controller
                                  name="status"
                                  control={control}
                                  defaultValue={item.date}
                                  rules={{ required: { message: "Digite o valor.", value: true },  }}
                                  render={({ field, fieldState: { error } }) => {
                                    return (
                                      <div className="w-full">
                                        <Label className="text-sm font-medium">Status</Label>
                                        <Input {...field} type="text" className="h-9" />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                      </div>
                                    )
                                  }}
                                />

                                <Controller
                                  name="discount"
                                  control={control}
                                  defaultValue={item.date}
                                  rules={{ required: { message: "Digite o valor.", value: true },  }}
                                  render={({ field, fieldState: { error } }) => {
                                    return (
                                      <div className="w-full">
                                        <Label className="text-sm font-medium">Desconto</Label>
                                        <Input {...field} type="text" className="h-9" />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                      </div>
                                    )
                                  }}
                                />

                                <div className="flex items-center justify-end gap-2">
                                  <DialogClose asChild>
                                    <Button type="button" variant="ghost">
                                      Cancelar
                                    </Button>
                                  </DialogClose>
                                  <Button type="submit" variant="default">
                                    Salvar
                                  </Button>
                                </div>
                              </form>
                            </DialogContent>
                        </Dialog>
                        </TableCell>
                        <TableCell className="font-medium">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="icon" variant="ghost" onClick={() => handleSelectItem(item)}>
                              <Trash className="size-4"/>
                              <span className="sr-only">Excluir pedido</span>
                            </Button>
                          </DialogTrigger>

                          <DialogContent className="max-h-[90vh] sm:max-h-full w-full max-w-[90vw] sm:max-w-md overflow-y-auto sm:overflow-visible">
                              <DialogHeader>
                                <DialogTitle>Deseja mesmo excluir o pedido?</DialogTitle>
                                <DialogDescription>
                                  Todos os dados serão apagados
                                </DialogDescription>
                              </DialogHeader>

                              <form className="space-y-4" onSubmit={handleSubmit(handleDeleteOrder, onError)}>
                                <div className="flex items-center justify-end gap-2">
                                  <DialogClose asChild>
                                    <Button type="button" variant="ghost">
                                      Cancelar
                                    </Button>
                                  </DialogClose>
                                  <Button type="submit" variant="default">
                                    Excluir
                                  </Button>
                                </div>
                              </form>
                            </DialogContent>
                        </Dialog>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>

          <Pagination
            onPageChange={handlePaginate}
            pageIndex={pageIndex}
            totalCount={ordersSizeData!}
            perPage={itemsPerPage}
          />
        </div>
      </div>
    </>
  );
}
