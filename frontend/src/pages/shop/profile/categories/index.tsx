import { createCategoriesController } from "@/api/shop/categories/create";
import { deleteCategoriesController } from "@/api/shop/categories/delete";
import { listCategoriesController } from "@/api/shop/categories/list";
import { updateCategoriesController } from "@/api/shop/categories/update";
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
import { useMutation, useQuery } from "@tanstack/react-query";
import { Pencil, Plus, Search, Trash } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

export function Categories() {
    const { data: categoriesData, isLoading: isCategoriesDataLoading } = useQuery({
      queryKey: ["listCategory", ],
      queryFn: () => listCategoriesController({ filter: {}, pagination: { getLimit: 1000 } }),
    })

    const [searchParams, setSearchParams] = useSearchParams();

    const categoriesSizeData = categoriesData?.data.length;

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

    const categoryValidationSchema = z.object({
      id: z.number(), nome: z.string(), descricao: z.string()
    })

    type CategoryValidationSchema = z.infer<typeof categoryValidationSchema>

    const { handleSubmit, control, reset } = useForm<CategoryValidationSchema>({
      resolver: zodResolver(categoryValidationSchema),
      values: {
        id: 0,
        descricao: '',
        nome: ''
      }
    })

    const [_, setSelectedItem] = useState<any>(null);

    const { mutateAsync: createNewCategory } = useMutation({
      mutationKey: ['createCategory'],
      mutationFn: createCategoriesController
    });
    const { mutateAsync: updateCategoryData } = useMutation({
      mutationKey: ['updateCategory'],
      mutationFn: updateCategoriesController
    });
    const { mutateAsync: deleteCategoryData } = useMutation({
      mutationKey: ['deleteCategory'],
      mutationFn: deleteCategoriesController
    });

    const handleSelectItem = (item: any) => {
      setSelectedItem(item),
      reset(item)
    }

    const onError = (errors: any) => {
      console.log("Erros de validação:", errors);
    };

    const handleRegisterNewCategory = async (data: CategoryValidationSchema) => {
      try {
        await createNewCategory({ descricao: data.descricao, nome: data.nome });
        toast.success("Categoria criada com sucesso.");
      } catch (error) {
        toast.error("Falha ao criar a categoria");
      }

      reset({ ...data })
    }

    const handleUpdateCategory = async (data: CategoryValidationSchema) => {
      console.log(data);
      try {
        await updateCategoryData({ id: data.id, descricao: data.descricao, nome: data.nome });
        toast.success("Categoria atualizada com sucesso.");
      } catch (error) {
        toast.error("Falha ao atualizar a categoria");
      }
      reset({ ...data })
    }

    const handleDeleteCategory = async (data: CategoryValidationSchema) => {
      try {
        await deleteCategoryData({ id: data.id, descricao: data.descricao, nome: data.nome });
        toast.success("Categoria deletada com sucesso.");
      } catch (error) {
        toast.error("Falha ao deletar a categoria");
      }
      reset();
    }

    return (
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Categorias</h2>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" onClick={() => reset({ descricao: "", nome: "" })}>
                <Plus className="mr-2 size-4" />
                Adicionar categoria
              </Button>
            </DialogTrigger>

            <DialogContent className="max-h-[90vh] sm:max-h-full w-full max-w-[90vw] sm:max-w-md overflow-y-auto sm:overflow-visible">
              <DialogHeader>
                <DialogTitle>Adicionar categoria</DialogTitle>
                <DialogDescription>
                  Adicione um novo tipo de categoria para sua loja.
                </DialogDescription>
              </DialogHeader>

              <form className="space-y-4" onSubmit={handleSubmit(handleRegisterNewCategory, onError)}>
                <Controller
                  name="nome"
                  control={control}
                  rules={{ required: { message: "Digite ao título.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <div className="space-y-1">
                        <Label>Título</Label>
                        <Input type="text" className="h-9" {...field} />
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
                        <Input type="text" className="h-9" {...field} />
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
                <TableHead className="">Nome</TableHead>
                <TableHead className="">Descrição</TableHead>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[64px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="w-full">
              {isCategoriesDataLoading === true ? (
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
              </TableRow>
              ) : (
                categoriesData?.data.slice(startIndex, endIndex).map((item) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="xs">
                              <Search className="h-3 w-3" />
                              <span className="sr-only">Detalhes da categoria</span>
                            </Button>
                          </DialogTrigger>

                          <DialogContent className="max-h-[90vh] sm:max-h-full w-full max-w-[90vw] sm:max-w-md overflow-y-auto sm:overflow-visible">
                              <DialogHeader>
                                <DialogTitle>Detalhes da categoria</DialogTitle>
                                <DialogDescription>
                                  Veja todos os detalhes da categoria.
                                </DialogDescription>
                              </DialogHeader>

                              <form className="space-y-4">
                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Nome</Label>
                                    <Input type="text" className="h-9" value={item.nome} disabled />
                                  </div>

                                  <div className="w-full">
                                    <Label className="text-sm font-medium">Descrição</Label>
                                    <Input type="text" className="h-9" value={item.descricao} disabled />
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
                        {item.descricao}
                      </TableCell>

                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="icon" variant="ghost" onClick={() => handleSelectItem(item)}>
                              <Pencil className="size-4" />
                              <span className="sr-only">Editar categoria</span>
                            </Button>
                          </DialogTrigger>

                          <DialogContent className="max-h-[90vh] sm:max-h-full w-full max-w-[90vw] sm:max-w-md overflow-y-auto sm:overflow-visible">
                              <DialogHeader>
                                <DialogTitle>Editar da categoria</DialogTitle>
                                <DialogDescription>
                                  Veja todos os detalhes da categoria.
                                </DialogDescription>
                              </DialogHeader>

                              <form className="space-y-4" onSubmit={handleSubmit(handleUpdateCategory, onError)}>
                                <Controller
                                  name="nome"
                                  control={control}
                                  defaultValue={item.nome}
                                  rules={{ required: { message: "Digite o valor.", value: true },  }}
                                  render={({ field, fieldState: { error } }) => {
                                    return (
                                      <div className="w-full">
                                        <Label className="text-sm font-medium">Nome</Label>
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
                                  rules={{ required: { message: "Digite o valor.", value: true },  }}
                                  render={({ field, fieldState: { error } }) => {
                                    return (
                                      <div className="w-full">
                                        <Label className="text-sm font-medium">Descrição</Label>
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
                            <Button size="icon" variant="ghost" onClick={() => handleSelectItem(item)}>
                              <Trash className="size-4"/>
                              <span className="sr-only">Excluir categoria</span>
                            </Button>
                          </DialogTrigger>

                          <DialogContent className="max-h-[90vh] sm:max-h-full w-full max-w-[90vw] sm:max-w-md overflow-y-auto sm:overflow-visible">
                              <DialogHeader>
                                <DialogTitle>Deseja mesmo excluir a categoria?</DialogTitle>
                                <DialogDescription>
                                  Todos os dados serão apagados
                                </DialogDescription>
                              </DialogHeader>

                              <form className="space-y-4" onSubmit={handleSubmit(handleDeleteCategory, onError)}>
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
          totalCount={categoriesSizeData!}
          perPage={itemsPerPage}
        />
      </div>
    );
  
}
