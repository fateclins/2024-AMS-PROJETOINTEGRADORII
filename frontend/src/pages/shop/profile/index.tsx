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

export function Profile() {
  const { data: userData, isLoading: isUserDataLoading } = findUser(1);
  const { data: addressData, isLoading: isAddressDataLoading } = findAddress(1);

  return (
    <>
      <Helmet title="Perfil" />
      <div className="w-full space-y-4">
        <h2 className="text-xl font-semibold">Perfil</h2>
        <Avatar className="size-16">
          <AvatarImage src="" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Button size="sm" variant="secondary">
          Editar avatar
        </Button>

        <form className="space-y-4">
          <div className="w-full">
            <Label>Nome</Label>
            {isUserDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Input value={userData!.name} disabled />
            )}
          </div>
          <div className="w-full">
            <Label>E-mail</Label>
            {isUserDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Input value={userData!.email} disabled />
            )}
          </div>
          <div className="w-full">
            <Label>Documento</Label>
            {isUserDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Input value={userData!.identity} disabled />
            )}
          </div>

          <div className="flex justify-end">
            <Button size="sm" disabled>
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
              <span className="text-sm text-muted-foreground">
                Rua das flores, Jardim - 123
              </span>
            </div>
          </div>
        </RadioGroup>

        <form className="space-y-4">
          <div className="w-full">
            <Label>CEP</Label>
            {isAddressDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Input value={addressData!.city} disabled />
            )}
          </div>
          <div className="flex flex-col items-center gap-2 lg:flex-row">
            <div className="w-full">
              <Label>Cidade</Label>
              {isAddressDataLoading === true ? (
                <Skeleton className="h-10 w-full" />
              ) : (
                <Input value={addressData!.city} disabled />
              )}
            </div>
            <div className="w-full">
              <Label>Estado</Label>
              {isAddressDataLoading === true ? (
                <Skeleton className="h-10 w-full" />
              ) : (
                <Input value={addressData!.state} disabled />
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full">
              <Label>Rua</Label>
              {isAddressDataLoading === true ? (
                <Skeleton className="h-10 w-full" />
              ) : (
                <Input value={addressData!.street} disabled />
              )}
            </div>
            <div className="w-full max-w-[120px]">
              <Label>Número</Label>
              {isAddressDataLoading === true ? (
                <Skeleton className="h-10 w-full" />
              ) : (
                <Input value={addressData!.number} disabled />
              )}
            </div>
          </div>
          <div className="w-full">
            <Label>Bairro</Label>
            {isAddressDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Input value={addressData!.district} disabled />
            )}
          </div>

          <div className="flex justify-end">
            <Button size="sm" disabled>
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
