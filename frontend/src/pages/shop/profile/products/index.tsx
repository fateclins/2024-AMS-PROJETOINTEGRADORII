import { createProductsController } from "@/api/shop/products/create";
import { deleteProductsController } from "@/api/shop/products/delete";
import { listProductsController } from "@/api/shop/products/list";
import { updateProductsController } from "@/api/shop/products/update";
import { Pagination } from "@/components/pagination";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Pencil, Plus, Search, Trash } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

export function Products() {
  // const queryClient = useQueryClient();

  const { data: productsData, isLoading: isProductsDataLoading } = useQuery({
    queryKey: ["listProduct", 40, 1],
    queryFn: () => listProductsController({ filter: {}, pagination: { getLimit: 40, getStart: 1 } }),
  });

    const [searchParams, setSearchParams] = useSearchParams();

    const productsSizeData = productsData?.data.length;

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

    const productValidationSchema = z.object({
      id: z.coerce.number(),
      qtde: z.coerce.number(),
      valor: z.coerce.number(),
      modelo: z.string(),
      descricao: z.string(),
      nome: z.string(),
      produtoDestaque: z.coerce.number(),
      idv1: z.coerce.number(),
      idv2: z.coerce.number(),
      idloja: z.coerce.number()
    })

    type ProductValidationSchema = z.infer<typeof productValidationSchema>

    const { handleSubmit, control, reset } = useForm<ProductValidationSchema>({
      resolver: zodResolver(productValidationSchema),
      values: {
        id: 0,
        descricao: '',
        modelo: '',
        nome: '',
        qtde: 0,
        valor: 0,
        produtoDestaque: 0,
        idloja: 0,
        idv1: 0,
        idv2: 0,
      }
    })

    const [_, setSelectedItem] = useState<any>(null);

    const { mutateAsync: createNewProduct } = useMutation({
      mutationKey: ['createProduct'],
      mutationFn: createProductsController,
      // onSuccess(_,variables) {
      //   const cached = queryClient.getQueryData(['listProduct'])
        
      //   if (cached) {
      //     queryClient.setQueryData(['listProduct'], {
      //       ...cached,
      //       ...variables,
      //     })
      //   }
      // },
    });
    const { mutateAsync: updateProductData } = useMutation({
      mutationKey: ['updateProduct'],
      mutationFn: updateProductsController,
      // onSuccess(_, variables) {
      //   const cached = queryClient.getQueryData(['listProduct'])

      //   console.log(cached);
        
      //   if (cached) {
      //     queryClient.setQueryData(['listProduct'], {
      //       ...cached,
      //       ...variables,
      //     })
      //   }
      // },
    });
    const { mutateAsync: deleteProductData } = useMutation({
      mutationKey: ['deleteProduct'],
      mutationFn: deleteProductsController,
      // onSuccess(_,variables) {
      //   const cached = queryClient.getQueryData(['listProduct'])
        
      //   if (cached) {
      //     queryClient.setQueryData(['listProduct'], {
      //       ...cached,
      //       ...variables,
      //     })
      //   }
      // },
    });

    const handleSelectItem = (item: ProductValidationSchema) => {
      setSelectedItem(item);
      reset(item);
    }

    const handleRegisterNewProduct = async (data: ProductValidationSchema) => {
      try {
        await createNewProduct({
            produtoDestaque: 0,
            descricao: data.descricao,
            idloja: 1,
            idv1: 1,
            idv2: 1,
            modelo: data.modelo,
            nome: data.nome,
            qtde: data.qtde,
            valor: data.valor,
          })
        toast.success("Produto criado com sucesso.");
      } catch (error) {
        toast.error("Falha ao criar o produto");
      }

      reset({ ...data })
    }

    const onError = (errors: any) => {
      console.log("Erros de validação:", errors);
    };

    async function handleUpdateProduct(data: ProductValidationSchema) {
      try {
        await updateProductData({
          id: data.id,
          qtde: data.qtde,
          valor: data.valor,
          nome: data.nome,
          descricao: data.descricao,
          modelo: data.modelo,
          produtoDestaque: data.produtoDestaque,
          idv1: data.idv1,
          idv2: data.idv2,
          idloja: data.idloja,
        });

        toast.success("Produto atualizado com sucesso.");
      } catch (error) {
        toast.error("Falha ao atualizar o produto");
      }

      reset({ ...data })
    }

    const handleDeleteProduct = async (data: ProductValidationSchema) => {
      try {
        await deleteProductData({
            id: data.id
          });
        toast.success("Produto deletado com sucesso.");
      } catch (error) {
        toast.error("Falha ao deletar o produto");
      }

      reset({ ...data })
    }

    return (
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Produtos</h2>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" onClick={() => reset({
                    id: 0,
                    descricao: '',
                    modelo: '',
                    nome: '',
                    qtde: 0,
                    valor: 0,
                    produtoDestaque: 0,
                    idloja: 0,
                    idv1: 0,
                    idv2: 0, 
                })}>
                <Plus className="mr-2 size-4" />
                Adicionar produto
              </Button>
            </DialogTrigger>

            <DialogContent className="max-h-[90vh] sm:max-h-full w-full max-w-[90vw] sm:max-w-md overflow-y-auto sm:overflow-visible">
              <DialogHeader>
                <DialogTitle>Adicionar produto</DialogTitle>
                <DialogDescription>
                  Adicione um novo tipo de produto para sua loja.
                </DialogDescription>
              </DialogHeader>

              <form className="space-y-4" onSubmit={handleSubmit(handleRegisterNewProduct)}>
                <Controller
                  name="nome"
                  control={control}
                  rules={{ required: { message: "Digite ao título.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <div className="space-y-1">
                        <Label>Título</Label>
                        <Input {...field} type="text" className="h-9"  />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </div>
                    )
                  }}
                />

                <Controller
                  name="modelo"
                  control={control}
                  rules={{ required: { message: "Digite a descrição.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <div className="space-y-1">
                        <Label>Descrição</Label>
                        <Input {...field} type="text" className="h-9" />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </div>
                    )
                  }}
                />

                <Controller
                  name="descricao"
                  control={control}
                  rules={{ required: { message: "Digite a descrição.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <div className="space-y-1">
                        <Label>Descrição</Label>
                        <Input {...field} type="text" className="h-9" />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </div>
                    )
                  }}
                />

                <Controller
                  name="qtde"
                  control={control}
                  rules={{ required: { message: "Digite a descrição.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <div className="space-y-1">
                        <Label>Descrição</Label>
                        <Input {...field} type="text" className="h-9" />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </div>
                    )
                  }}
                />

                <Controller
                  name="valor"
                  control={control}
                  rules={{ required: { message: "Digite a descrição.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <div className="space-y-1">
                        <Label>Descrição</Label>
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
                  <Button type="submit">Salvar</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
            <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Modelo</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Qtde. Estoque</TableHead>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[64px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="w-full">
              {isProductsDataLoading === true ? (
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
              </TableRow>
              ) : (
                productsData?.data.slice(startIndex, endIndex).map((item) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="xs">
                              <Search className="h-3 w-3" />
                              <span className="sr-only">Detalhes da produto</span>
                            </Button>
                          </DialogTrigger>

                          <DialogContent className="max-h-[90vh] sm:max-h-full w-full max-w-[90vw] sm:max-w-md overflow-y-auto sm:overflow-visible">
                              <DialogHeader>
                                <DialogTitle>Detalhes da produto</DialogTitle>
                                <DialogDescription>
                                  Veja todos os detalhes da produto.
                                </DialogDescription>
                              </DialogHeader>

                              <form className="space-y-4">
                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Nome</Label>
                                    <Input type="text" className="h-9" value={item.nome} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Modelo</Label>
                                    <Input type="text" className="h-9" value={item.modelo} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Descrição</Label>
                                    <Input type="text" className="h-9" value={item.descricao} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Quantidade</Label>
                                    <Input type="text" className="h-9" value={item.qtde} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Valor</Label>
                                    <Input type="text" className="h-9" value={item.valor} disabled />
                                  </div>
                                  
                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Mais vendido</Label>
                                    <Input type="text" className="h-9" value={item.produtoDestaque ? "É um produto Bestseller" : "Não é um produto Bestseller"} disabled />
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
                        {item.nome}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {item.modelo}
                      </TableCell>
                      <TableCell>{item.valor}</TableCell>
                      <TableCell className="font-medium">
                        {item.qtde}
                      </TableCell>

                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="icon" variant="ghost" onClick={() => handleSelectItem({
                              ...item,
                              produtoDestaque: item.produtoDestaque
                            })}>
                              <Pencil className="size-4" />
                              <span className="sr-only">Editar produto</span>
                            </Button>
                          </DialogTrigger>

                          <DialogContent className="max-h-[90vh] sm:max-h-full w-full max-w-[90vw] sm:max-w-md overflow-y-auto sm:overflow-visible">
                              <DialogHeader>
                                <DialogTitle>Editar da produto</DialogTitle>
                                <DialogDescription>
                                  Veja todos os detalhes da produto.
                                </DialogDescription>
                              </DialogHeader>

                              <form onSubmit={handleSubmit(handleUpdateProduct, onError)} className="space-y-4">
                                <Controller
                                    name="nome"
                                    control={control}
                                    defaultValue={item.nome}
                                    rules={{ required: { message: "Digite ao título.", value: true },  }}
                                    render={({ field, fieldState: { error } }) => {
                                        return (
                                        <div className="space-y-1">
                                            <Label>Nome</Label>
                                            <Input {...field} type="text" className="h-9" />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </div>
                                        )
                                    }}
                                    />

                                    <Controller
                                    name="modelo"
                                    control={control}
                                    defaultValue={item.modelo}
                                    rules={{ required: { message: "Digite a descrição.", value: true },  }}
                                    render={({ field, fieldState: { error } }) => {
                                        return (
                                        <div className="space-y-1">
                                            <Label>Modelo</Label>
                                            <Input {...field} type="text" className="h-9" />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </div>
                                        )
                                    }}
                                    />

                                    <Controller
                                        name="descricao"
                                        control={control}
                                        defaultValue={item.descricao}
                                        rules={{ required: { message: "Digite a descrição.", value: true },  }}
                                        render={({ field, fieldState: { error } }) => {
                                            return (
                                            <div className="space-y-1">
                                                <Label>Descrição</Label>
                                                <Input {...field} type="text" className="h-9" />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </div>
                                            )
                                        }}
                                    />

                                    <Controller
                                        name="qtde"
                                        control={control}
                                        defaultValue={item.qtde}
                                        rules={{ required: { message: "Digite a descrição.", value: true },  }}
                                        render={({ field, fieldState: { error } }) => {
                                            return (
                                            <div className="space-y-1">
                                                <Label>Quantidade</Label>
                                                <Input {...field} type="text" className="h-9" />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </div>
                                            )
                                        }}
                                    />

                                    <Controller
                                        name="valor"
                                        control={control}
                                        defaultValue={item.valor}
                                        rules={{ required: { message: "Digite a descrição.", value: true },  }}
                                        render={({ field, fieldState: { error } }) => {
                                            return (
                                            <div className="space-y-1">
                                                <Label>Valor</Label>
                                                <Input {...field} type="text" className="h-9" />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </div>
                                            )
                                        }}
                                    />

                                    <Controller
                                        name="produtoDestaque"
                                        control={control}
                                        defaultValue={item.produtoDestaque}
                                        rules={{ required: { message: "Digite a descrição.", value: true },  }}
                                        render={({ field, fieldState: { error } }) => {
                                            return (
                                            <div className="space-y-1">
                                                <Label>Mais vendido</Label>
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
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="icon" variant="ghost" onClick={() => handleSelectItem({
                              ...item,
                              produtoDestaque: item.produtoDestaque
                            })}>
                              <Trash className="size-4"/>
                              <span className="sr-only">Excluir produto</span>
                            </Button>
                          </DialogTrigger>

                          <DialogContent className="max-h-[90vh] sm:max-h-full w-full max-w-[90vw] sm:max-w-md overflow-y-auto sm:overflow-visible">
                              <DialogHeader>
                                <DialogTitle>Deseja mesmo excluir a produto?</DialogTitle>
                                <DialogDescription>
                                  Todos os dados serão apagados
                                </DialogDescription>
                              </DialogHeader>

                              <form className="space-y-4" onSubmit={handleSubmit(handleDeleteProduct, onError)}>
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
          totalCount={productsSizeData!}
          perPage={itemsPerPage}
        />
      </div>
    );
  }

