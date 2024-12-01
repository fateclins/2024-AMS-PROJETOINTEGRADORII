import { createProduct } from "@/api/shop/products/create";
import { deleteProduct } from "@/api/shop/products/delete";
import { listProducts } from "@/api/shop/products/list";
import { updateProduct } from "@/api/shop/products/update";
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
import { Ellipsis, Pencil, Plus, Search, Trash } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

export function Products() {

    const { data: productsData, isLoading: isProductsDataLoading } =
    listProducts();

    const [searchParams, setSearchParams] = useSearchParams();

    const productsSizeData = productsData?.length;

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
        quantity: z.coerce.number(),
        value: z.coerce.number(),
        model: z.string(),
        name: z.string(),
        description: z.string(),
        bestsellerProduct: z.string(),
        idStore: z.coerce.number(),
        idv1: z.coerce.number(),
        idv2: z.coerce.number(),
    })

    type ProductValidationSchema = z.infer<typeof productValidationSchema>

    const { handleSubmit, control, reset } = useForm<ProductValidationSchema>({
      resolver: zodResolver(productValidationSchema),
      values: {
        id: 0,
        description: '',
        model: '',
        name: '',
        quantity: 0,
        value: 0,
        bestsellerProduct: 'false',
        idStore: 0,
        idv1: 0,
        idv2: 0,
      }
    })

    const [_, setSelectedItem] = useState<any>(null);

    const { mutateAsync: createNewProduct } = createProduct();
    const { mutateAsync: updateProductData } = updateProduct();
    const { mutateAsync: deleteProductData } = deleteProduct();

    const handleSelectItem = (item: ProductValidationSchema) => {
      setSelectedItem(item),
      reset(item)
    }

    const handleRegisterNewProduct = async (data: ProductValidationSchema) => {
          try {
        await createNewProduct({
            bestsellerProduct: false,
            description: data.description,
            idStore: 1,
            idv1: 1,
            idv2: 1,
            model: data.model,
            name: data.name,
            quantity: data.quantity,
            value: data.value,
          })
        toast.success("Produto criado com sucesso.");
      } catch (error) {
        toast.error("Falha ao criar o produto");
      }

      reset();
    }

    const onError = (errors: any) => {
      console.log("Erros de validação:", errors);
    };

    async function handleUpdateProduct(data: ProductValidationSchema) {
      try {
        await updateProductData({
          id: data.id,
          quantity: data.quantity,
          value: data.value,
          name: data.name,
          description: data.description,
          model: data.model,
          bestsellerProduct: Boolean(data.bestsellerProduct),
          idv1: data.idv1,
          idv2: data.idv2,
          idStore: data.idStore,
        });

        toast.success("Produto atualizado com sucesso.");
      } catch (error) {
        toast.error("Falha ao atualizar o produto");
      }
      reset();
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
      reset();
    }

    return (
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Produtos</h2>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" onClick={() => reset({
                    id: 0,
                    description: '',
                    model: '',
                    name: '',
                    quantity: 0,
                    value: 0,
                    bestsellerProduct: 'false',
                    idStore: 0,
                    idv1: 0,
                    idv2: 0, 
                })}>
                <Plus className="mr-2 size-4" />
                Adicionar produto
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar produto</DialogTitle>
                <DialogDescription>
                  Adicione um novo tipo de produto para sua loja.
                </DialogDescription>
              </DialogHeader>

              <form className="space-y-4" onSubmit={handleSubmit(handleRegisterNewProduct)}>
                <Controller
                  name="name"
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
                  name="model"
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
                  name="description"
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
                  name="quantity"
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
                  name="value"
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
                productsData?.slice(startIndex, endIndex).map((item) => {
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

                          <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Detalhes da produto</DialogTitle>
                                <DialogDescription>
                                  Veja todos os detalhes da produto.
                                </DialogDescription>
                              </DialogHeader>

                              <form className="space-y-4">
                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Nome</Label>
                                    <Input type="text" className="h-9" value={item.name} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Modelo</Label>
                                    <Input type="text" className="h-9" value={item.model} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Descrição</Label>
                                    <Input type="text" className="h-9" value={item.description} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Quantidade</Label>
                                    <Input type="text" className="h-9" value={item.quantity} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Valor</Label>
                                    <Input type="text" className="h-9" value={item.value} disabled />
                                  </div>
                                  
                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Mais vendido</Label>
                                    <Input type="text" className="h-9" value={item.bestsellerProduct ? "É um produto Bestseller" : "Não é um produto Bestseller"} disabled />
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
                        {item.name}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {item.model}
                      </TableCell>
                      <TableCell>{item.value}</TableCell>
                      <TableCell className="font-medium">
                        {item.quantity}
                      </TableCell>

                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="icon" variant="ghost" onClick={() => handleSelectItem({
                              ...item,
                              bestsellerProduct: String(item.bestsellerProduct)
                            })}>
                              <Pencil className="size-4" />
                              <span className="sr-only">Editar produto</span>
                            </Button>
                          </DialogTrigger>

                          <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Editar da produto</DialogTitle>
                                <DialogDescription>
                                  Veja todos os detalhes da produto.
                                </DialogDescription>
                              </DialogHeader>

                              <form onSubmit={handleSubmit(handleUpdateProduct, onError)} className="space-y-4">
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue={item.name}
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
                                    name="model"
                                    control={control}
                                    defaultValue={item.model}
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
                                        name="description"
                                        control={control}
                                        defaultValue={item.description}
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
                                        name="quantity"
                                        control={control}
                                        defaultValue={item.quantity}
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
                                        name="value"
                                        control={control}
                                        defaultValue={item.value}
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
                                        name="bestsellerProduct"
                                        control={control}
                                        defaultValue={String(item.bestsellerProduct)}
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
                              bestsellerProduct: String(item.bestsellerProduct)
                            })}>
                              <Trash className="size-4"/>
                              <span className="sr-only">Excluir produto</span>
                            </Button>
                          </DialogTrigger>

                          <DialogContent>
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

