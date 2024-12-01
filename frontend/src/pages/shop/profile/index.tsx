import { Helmet } from "react-helmet-async";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { findUser } from "@/api/shop/users/find";
import { Skeleton } from "@/components/ui/skeleton";
import { findAddress } from "@/api/shop/addresses/find";
import { updateUser } from "@/api/shop/users/update";
import { updateAddress } from "@/api/shop/addresses/update";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function Profile() {
  const { data: userData, isLoading: isUserDataLoading } = findUser(1);
  const { data: addressData, isLoading: isAddressDataLoading } = findAddress(1);
  const { mutateAsync: updateUserData } = updateUser();
  const { mutateAsync: updateAddressData } = updateAddress();

  const userValidationSchema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    image: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: 'O arquivo deve ter no máximo 5MB',
    })
    .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
      message: 'Apenas arquivos JPEG e PNG são permitidos',
    }),
    identity: z.string(),
    email: z.string().email(),
    password: z.string(),
    idUserType: z.coerce.number(),
  })

  type UserValidationSchema = z.infer<typeof userValidationSchema>

  const { control: userControl, handleSubmit: handleUserSubmit } = useForm<UserValidationSchema>({
    resolver: zodResolver(userValidationSchema),
    values: {
      id: userData?.id ?? 0,
      email: userData?.email ?? "",
      image: userData?.image || undefined,
      identity: userData?.identity ?? "",
      idUserType: userData?.idUserType ?? "",
      name: userData?.name ?? "",
      password: userData?.password ?? "",
    }
  })

  const handleUpdateUser = async (data: UserValidationSchema) => {
    try {
      await updateUserData({ 
        ...data,
        image: data.image,
      });
      toast.success("Perfil atualizado com sucesso");
    } catch (error) {
      toast.error("Falha ao atualizar o perfil");
    }
  }

  const addressValidationSchema = z.object({
    id: z.coerce.number(),
    country: z.string(),
    state: z.string(),
    cep: z.string(),
    city: z.string(),
    district: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
    idUser: z.coerce.number(),
  })

  type AddressValidationSchema = z.infer<typeof addressValidationSchema>

  const { control: addressControl, handleSubmit: handleAddressSubmit } = useForm<AddressValidationSchema>({
    resolver: zodResolver(addressValidationSchema),
    values: {
      id: addressData?.id ?? 0,
      cep: addressData?.cep ?? "",
      city: addressData?.city ?? "",
      complement: addressData?.complement ?? "",
      country: addressData?.country ?? "",
      district: addressData?.district ?? "",
      number: addressData?.number ?? "",
      state: addressData?.state ?? "",
      street: addressData?.street ?? "",
      idUser: addressData?.idUser ?? 0,
    }
  })  

  const handleUpdateAddress = async (data: AddressValidationSchema) => {
    try {
      await updateAddressData({ ...data });
      toast.success("Endereço atualizado com sucesso.");
    } catch (error) {
      toast.error("Falha ao atualizar o endereço");
    }
  }

  return (
    <>
      <Helmet title="Perfil" />
      <div className="w-full space-y-4">
        <h2 className="text-xl font-semibold">Perfil</h2>
        <Avatar className="size-16">
          <AvatarImage src="" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" variant="secondary">
              Editar avatar
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Selecione uma foto</DialogTitle>
              <DialogDescription>
                Adicione uma nova foto no seu perfil.
              </DialogDescription>
            </DialogHeader>

            <form>
              <Controller
                name="image"
                control={userControl}
                rules={{ required: { message: "Digite a descrição.", value: true },  }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <div className="space-y-1">
                      <Label>Descrição</Label>
                      <input {...field} type="file" accept="image/*" className="h-9" onChange={(e) => {
                        const file = e.target.files ? e.target.files[0] : null;
                        field.onChange(file);
                      }} />
                      {error && <p className="text-red-500">{error.message}</p>}
                    </div>
                  )
                }}
              />
            </form>
          </DialogContent>
        </Dialog>

        <form className="space-y-4" onSubmit={handleUserSubmit(handleUpdateUser)}>
          <div className="w-full">
            <Label>Nome</Label>
            {isUserDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Controller
                  name="name"
                  control={userControl}
                  rules={{ required: { message: "Digite o nome.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <>
                        <Input type="text" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )
                  }}
                />
            )}
          </div>

          <div className="w-full">
            <Label>E-mail</Label>
            {isUserDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Controller
                  name="email"
                  control={userControl}
                  rules={{ required: { message: "Digite o e-mail.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <>
                        <Input type="text" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )
                  }}
                />
            )}
          </div>

          <div className="w-full">
            <Label>Documento</Label>
            {isUserDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Controller
                  name="identity"
                  control={userControl}
                  rules={{ required: { message: "Digite o identidade.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <>
                        <Input type="text" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
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

        <Separator />

        <h2 className="text-xl font-semibold">Endereço</h2>

        <RadioGroup defaultValue="default">
          <div className="flex items-center space-x-2 rounded-lg border p-4">
            <RadioGroupItem value="default" id="r1" />
            <div className="flex flex-col gap-2">
              <Label htmlFor="r1">Padrão</Label>
              {isAddressDataLoading === true ? (
                <Skeleton className="w-[500px] h-5"/>
              ) : (
                <span className="text-sm text-muted-foreground">
                  {addressData!.street}, {addressData!.district} - {addressData!.number}
                </span>
              )}
            </div>
          </div>
        </RadioGroup>

        <form className="space-y-4" onSubmit={handleAddressSubmit(handleUpdateAddress)}>
          <div className="w-full">
            <Label>CEP</Label>
            {isAddressDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Controller
                  name="cep"
                  control={addressControl}
                  rules={{ required: { message: "Digite o cep.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <>
                        <Input type="text" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )
                  }}
                />
            )}
          </div>

          <div className="flex flex-col items-center gap-2 lg:flex-row">
            <div className="w-full">
              <Label>Cidade</Label>
              {isAddressDataLoading === true ? (
                <Skeleton className="h-10 w-full" />
              ) : (
                <Controller
                  name="city"
                  control={addressControl}
                  rules={{ required: { message: "Digite o cidade.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <>
                        <Input type="text" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )
                  }}
                />
              )}
            </div>

            <div className="w-full">
              <Label>Estado</Label>
              {isAddressDataLoading === true ? (
                <Skeleton className="h-10 w-full" />
              ) : (
                <Controller
                  name="state"
                  control={addressControl}
                  rules={{ required: { message: "Digite o cep.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <>
                        <Input type="text" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-full">
              <Label>Rua</Label>
              {isAddressDataLoading === true ? (
                <Skeleton className="h-10 w-full" />
              ) : (
                <Controller
                  name="street"
                  control={addressControl}
                  rules={{ required: { message: "Digite o cep.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <>
                        <Input type="text" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )
                  }}
                />
              )}
            </div>

            <div className="w-full max-w-[120px]">
              <Label>Número</Label>
              {isAddressDataLoading === true ? (
                <Skeleton className="h-10 w-full" />
              ) : (
                <Controller
                  name="number"
                  control={addressControl}
                  rules={{ required: { message: "Digite o cep.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <>
                        <Input type="text" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )
                  }}
                />
              )}
            </div>
          </div>
          <div className="w-full">
            <Label>Bairro</Label>
            {isAddressDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Controller
                  name="district"
                  control={addressControl}
                  rules={{ required: { message: "Digite o cep.", value: true },  }}
                  render={({ field, fieldState: { error } }) => {
                    return (
                      <>
                        <Input type="text" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
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
