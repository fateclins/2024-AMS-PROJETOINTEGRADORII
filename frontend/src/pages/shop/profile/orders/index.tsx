import { MagnifyingGlass } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";

import { Input } from "@/components/ui/input";

import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {  Pencil, Search, Trash } from "lucide-react";
import { Pagination } from "@/components/pagination";
import { listOrdersController } from "@/api/shop/orders/list";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@/components/label";
import { useState } from "react";
import { updateOrdersController } from "@/api/shop/orders/update";
import { deleteOrdersController } from "@/api/shop/orders/delete";
import { toast } from "sonner";
import { useMutation, useQuery } from "@tanstack/react-query";

export function Orders() {
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
  
  const itemsPerPage = 10;
  const startIndex = pageIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const { data: ordersData, isLoading: isOrdersDataLoading } =
  useQuery({
    queryKey: ['listOrders', 40],
    queryFn: () => listOrdersController({ filter: {}, pagination: { getLimit: 1000 } }),
    retry: 1,
  });

  const ordersSizeData = ordersData?.data.length;


  const orderValidationSchema = z.object({
    id: z.number(),
    valorTotal: z.number(),
    datap: z.string(),
    statusp: z.string(),
    valorFinal: z.number(),
    desconto: z.number(),
    idUsuario: z.number()
  })

  type OrderValidationSchema = z.infer<typeof orderValidationSchema>

  const { handleSubmit, control, reset } = useForm<OrderValidationSchema>({
    resolver: zodResolver(orderValidationSchema),
    values: {
      datap: "",
      desconto: 0,
      valorFinal: 0,
      id: 0,
      idUsuario: 0,
      statusp: "",
      valorTotal: 0,
    }
  })

  const [_, setSelectedItem] = useState<any>(null);

    const { mutateAsync: updateOrderData } = useMutation({
      mutationKey: ['updateOrder'],
      mutationFn: updateOrdersController
    });

    const { mutateAsync: deleteOrderData } = useMutation({
      mutationKey: ['deleteOrder'],
      mutationFn: deleteOrdersController
    });

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
          datap: String(new Date(data.datap)),
          desconto: data.desconto,
          valorFinal: data.valorFinal,
          idUsuario: data.idUsuario,
          statusp: data.statusp,
          valorTotal: data.valorTotal,
        });

        toast.success("Pedido atualizado com sucesso.");
      } catch (error) {
        toast.error("Falha ao atualizar o pedido");
      }
      reset({ ...data })
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
      reset({ ...data })
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
                  ordersData?.data.slice(startIndex, endIndex).map((item) => {
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
                                    <Input type="text" className="h-9" value={item.datap} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Valor total</Label>
                                    <Input type="text" className="h-9" value={item.valorTotal} disabled />
                                  </div>
                                </div>

                                <div className="flex flex-col items-center gap-2 lg:flex-row">
                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Valor final</Label>
                                    <Input type="text" className="h-9" value={item.valorFinal} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Status</Label>
                                    <Input type="text" className="h-9" value={item.statusp} disabled />
                                  </div>
                                </div>

                                <div className="w-6/12">
                                  <Label className="text-sm font-medium">Desconto</Label>
                                  <Input type="text" className="h-9" value={item.desconto} disabled />
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
                          {item.datap}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {item.valorTotal}
                        </TableCell>
                        <TableCell>
                          {item.valorFinal}
                        </TableCell>
                        <TableCell>
                          {item.statusp}
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.desconto}
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
                                  name="valorTotal"
                                  control={control}
                                  defaultValue={item.valorTotal}
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
                                  name="valorFinal"
                                  control={control}
                                  defaultValue={item.valorFinal}
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
                                  name="statusp"
                                  control={control}
                                  defaultValue={item.statusp}
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
                                  name="desconto"
                                  control={control}
                                  defaultValue={item.desconto}
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
