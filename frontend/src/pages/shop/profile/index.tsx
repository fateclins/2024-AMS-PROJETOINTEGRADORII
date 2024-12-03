import { Helmet } from "react-helmet-async";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { findUsersController } from "@/api/shop/users/find";
import { Skeleton } from "@/components/ui/skeleton";
import { findAddressesController } from "@/api/shop/addresses/find";
import { updateUsersController } from "@/api/shop/users/update";
import { updateAddressesController } from "@/api/shop/addresses/update";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Loader } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
// import { useState } from "react";

export function Profile() {
  const userValidationSchema = z.object({
    id: z.number(),
    nome: z.string(),
    imagem: z.string(),
    indentidade: z.string(),
    email: z.string(),
    senha: z.string(),
    idTipoUsuario: z.number()
  })

  // const fileSchema = z.instanceof(File).refine(file => file.size > 0, {
  //   message: "O arquivo não pode estar vazio",
  // });

  // type FileSchema = z.infer<typeof fileSchema>

  // const { control: fileControl, handleSubmit: handleFileSubmit, formState: { isSubmitting: isSubmittingFile } } = useForm<FileSchema>({
  //   resolver: zodResolver(fileSchema),
  //   values: {
  //     arrayBuffer: (): Promise<ArrayBuffer> => {},
  //     bytes,
  //   }
  // })

  type UserValidationSchema = z.infer<typeof userValidationSchema>

  const { data: userData, isLoading: isUserDataLoading } = useQuery({
    queryKey: ['findUser', 1],
    queryFn: () => findUsersController(1),
    retry: 1,
  });
  const { data: addressData, isLoading: isAddressDataLoading } = useQuery({
    queryKey: ['findAddress', 1],
    queryFn: () => findAddressesController(1),
    retry: 1,
  });

  const { mutateAsync: updateUserData } = useMutation({
    mutationKey: ['updateUser'],
    mutationFn: updateUsersController
  });
  const { mutateAsync: updateAddressData } = useMutation({
    mutationKey: ['updateAddress'],
    mutationFn: updateAddressesController
  });

  const { control: userControl, handleSubmit: handleUserSubmit, formState: { isSubmitting: isSubmittingUser } } = useForm<UserValidationSchema>({
    resolver: zodResolver(userValidationSchema),
    values: {
      id: userData?.id ?? 0,
      email: userData?.email ?? "",
      imagem: userData?.imagem ?? "",
      indentidade: userData?.indentidade ?? "",
      idTipoUsuario: userData?.idTipoUsuario ?? "",
      nome: userData?.nome ?? "",
      senha: userData?.senha ?? "",
    }
  })

  const onError = (error) => {
    console.log(error);
  }

  const handleUpdateUser = async (data: UserValidationSchema) => {
    try {
      await updateUserData({ 
        ...data,
      });
      toast.success("Perfil atualizado com sucesso");
    } catch (error) {
      toast.error("Falha ao atualizar o perfil");
    }
  }

  const addressValidationSchema = z.object({
    id: z.number(),
    pais: z.string(),
    cep: z.string(),
    estado: z.string(),
    cidade: z.string(),
    bairro: z.string(),
    rua: z.string(),
    numero: z.string(),
    logradouro: z.string(),
    idUsuario: z.number()
  })

  type AddressValidationSchema = z.infer<typeof addressValidationSchema>

  const { control: addressControl, handleSubmit: handleAddressSubmit, formState: { isSubmitting: isSubmittingAddress } } = useForm<AddressValidationSchema>({
    resolver: zodResolver(addressValidationSchema),
    values: {
      id: addressData?.id ?? 0,
      cep: addressData?.cep ?? "",
      cidade: addressData?.cidade ?? "",
      logradouro: addressData?.logradouro ?? "",
      pais: addressData?.pais ?? "",
      bairro: addressData?.bairro ?? "",
      numero: addressData?.numero ?? "",
      estado: addressData?.estado ?? "",
      rua: addressData?.rua ?? "",
      idUsuario: addressData?.idUsuario ?? 0,
    }
  })  

  // const [file, setFile] = useState<File | null>(null);
  // const [error, setError] = useState<string | null>(null);

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = event.target.files ? event.target.files[0] : null;

  //   console.log(selectedFile)
    
  //   if (selectedFile) {
  //     try {
  //       // Valida o arquivo com Zod
  //       userValidationSchema.parse(selectedFile);
  //       setFile(selectedFile);
  //       setError(null); // Limpa o erro caso o arquivo seja válido
  //     } catch (e) {
  //       setError((e as Error).message); // Exibe o erro, se houver
  //     }
  //   }
  // };

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

            {/* <form onSubmit={handleFileSubmit(handleFileSubmit, onError)}>
              <Controller
                name=""
                control={fileControl}
                rules={{ required: { message: "Digite a descrição.", value: true },  }}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <div className="space-y-1">
                      <Label>Imagem</Label>
                      <input
                        type="file"
                        accept="image/*"
                        className="file-input"
                        onChange={handleFileChange}
                        onBlur={() => {}}
                        disabled={false}
                        name="imagem"
                      />
                      {error && <p className="text-red-500">{error.message}</p>}
                    </div>
                  )
                }}
              />
            </form> */}
          </DialogContent>
        </Dialog>

        <form className="space-y-4" onSubmit={handleUserSubmit(handleUpdateUser, onError)}>
          <div className="w-full">
            <Label>Nome</Label>
            {isUserDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Controller
                  name="nome"
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
                  name="indentidade"
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
            <Button size="sm" type="submit" disabled={isSubmittingUser}>
            {isSubmittingAddress ? <Loader className="animate-spin"/> : "Salvar"}
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
                  {addressData!.rua}, {addressData!.bairro} - {addressData!.numero}
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
                  name="cidade"
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
                  name="estado"
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
                  name="rua"
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
                  name="numero"
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
                  name="bairro"
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
            <Button size="sm" type="submit" disabled={isSubmittingAddress}>
              {isSubmittingAddress ? <Loader className="animate-spin"/> : "Salvar"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
