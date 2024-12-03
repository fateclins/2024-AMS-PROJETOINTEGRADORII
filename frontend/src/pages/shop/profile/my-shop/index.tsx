import { Helmet } from "react-helmet-async";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { findStoresController } from "@/api/shop/stores/find";
import { Skeleton } from "@/components/ui/skeleton";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateStoresController } from "@/api/shop/stores/update";
import { toast } from "sonner";
import { useMutation, useQuery } from "@tanstack/react-query";

export function MyShop() {
  const { data: storeData, isLoading: isStoreDataLoading } = useQuery({
    queryKey: ['findStore', 1],
    queryFn: () => findStoresController(1)
  });

  const storeValidationSchema = z.object({
    id: z.number(),
    nome: z.string(),
    logo: z.string(),
    banner: z.string(),
    qtdproduto: z.string(),
    corfundo: z.string(),
    corfonte: z.string(),
    area: z.string(),
    cnpj: z.string(),
    idUsuario: z.number()
  })

  type StoreValidationSchema = z.infer<typeof storeValidationSchema>

  const { handleSubmit, control } = useForm<StoreValidationSchema>({
    resolver: zodResolver(storeValidationSchema),
    values: {
      id: storeData?.id ?? 0,
      area: storeData?.area ?? "",
      corfundo: storeData?.corfundo ?? "",
      banner: storeData?.banner ?? "",
      cnpj: storeData?.cnpj ?? "",
      corfonte: storeData?.corfonte ?? "",
      idUsuario: storeData?.idUsuario ?? "",
      logo: storeData?.logo ?? "",
      nome: storeData?.nome ?? "",
      qtdproduto: storeData?.qtdproduto ?? ""
    }
  })

  const { mutateAsync: updateNewStore } = useMutation({
    mutationKey: ['updateStore'],
    mutationFn: updateStoresController
  });

  const handleUpdateStore = async (data: StoreValidationSchema) => {
    try {
      await updateNewStore({ ...data });
      toast.success("Loja atualizada com sucesso.");
    } catch (error) {
      toast.error("Falha ao atualizar a loja.");
    }
  }

  return (
    <>
      <Helmet title="Minha loja" />
      <div className="w-full space-y-4">
        <h2 className="text-xl font-semibold">Minha loja</h2>

        <div className="flex h-32 w-full items-center justify-center rounded-lg bg-muted">
          <span className="text-sm text-muted-foreground">Banner da loja</span>
        </div>

        <Avatar className="size-16">
          <AvatarImage src="" />
          <AvatarFallback>LJ</AvatarFallback>
        </Avatar>
        <Button size="sm" variant="secondary">
          Editar avatar
        </Button>

        <form className="space-y-4" onSubmit={handleSubmit(handleUpdateStore)}>
          <div className="w-full">
            <Label>Nome</Label>
            {isStoreDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Controller
                  name="nome"
                  control={control}
                  rules={{ required: { message: "Digite ao título.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <div className="space-y-1">
                        <>
                          <Input type="text" className="h-9" {...field} />
                          {error && <p className="text-red-500">{error.message}</p>}
                        </>
                      </div>
                    )
                  }}
                />
            )}
          </div>

          <div className="w-full">
            <Label>CNPJ</Label>
            {isStoreDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Controller
                  name="cnpj"
                  control={control}
                  rules={{ required: { message: "Digite ao título.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <div className="space-y-1">
                        <>
                          <Input type="text" className="h-9" {...field} />
                          {error && <p className="text-red-500">{error.message}</p>}
                        </>
                      </div>
                    )
                  }}
                />
            )}
          </div>

          <div className="w-full">
            <Label>Cor fundo</Label>
            {isStoreDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Controller
                  name="corfundo"
                  control={control}
                  rules={{ required: { message: "Digite ao título.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <div className="space-y-1">
                        <>
                          <Input type="text" className="h-9" {...field} />
                          {error && <p className="text-red-500">{error.message}</p>}
                        </>
                      </div>
                    )
                  }}
                />
            )}
          </div>

          <div className="w-full">
            <Label>Cor fonte</Label>
            {isStoreDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Controller
                  name="corfonte"
                  control={control}
                  rules={{ required: { message: "Digite ao título.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <div className="space-y-1">
                        <>
                          <Input type="text" className="h-9" {...field} />
                          {error && <p className="text-red-500">{error.message}</p>}
                        </>
                      </div>
                    )
                  }}
                />
            )}
          </div>

          <div className="w-full">
            <Label>Quantidade de produtos</Label>
            {isStoreDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Controller
                  name="qtdproduto"
                  control={control}
                  rules={{ required: { message: "Digite ao título.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <div className="space-y-1">
                        <>
                          <Input type="text" className="h-9" {...field} disabled />
                          {error && <p className="text-red-500">{error.message}</p>}
                        </>
                      </div>
                    )
                  }}
                />
            )}
          </div>

          <div className="flex justify-end">
            <Button size="sm" type="submit">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
