import { Helmet } from "react-helmet-async";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { findStore } from "@/api/shop/stores/find";
import { Skeleton } from "@/components/ui/skeleton";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateStore } from "@/api/shop/stores/update";
import { toast } from "sonner";

export function MyShop() {
  const { data: storeData, isLoading: isStoreDataLoading } = findStore(1);

  const storeValidationSchema = z.object({
    id: z.coerce.number(),
    area: z.string(),
    background: z.string(),
    banner: z.string(),
    cnpj: z.string(),
    fontColor: z.string(),
    idUser: z.coerce.number(),
    logo: z.string(),
    name: z.string(),
    quantityProduct: z.string(),
  })

  type StoreValidationSchema = z.infer<typeof storeValidationSchema>

  const { handleSubmit, control } = useForm<StoreValidationSchema>({
    resolver: zodResolver(storeValidationSchema),
    values: {
      id: storeData?.id ?? 0,
      area: storeData?.area ?? "",
      background: storeData?.background ?? "",
      banner: storeData?.banner ?? "",
      cnpj: storeData?.cnpj ?? "",
      fontColor: storeData?.fontColor ?? "",
      idUser: storeData?.idUser ?? "",
      logo: storeData?.logo ?? "",
      name: storeData?.name ?? "",
      quantityProduct: storeData?.quantityProduct ?? ""
    }
  })

  const { mutateAsync: updateNewStore } = updateStore();

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
                  name="name"
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
