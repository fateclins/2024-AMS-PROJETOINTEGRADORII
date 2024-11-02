import { NotePencil } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQuery } from "@tanstack/react-query";
import { findUsersController } from "@/api/shop/users/find";
import { updateUsersController } from "@/api/shop/users/update";

export function Profile() {

  const { data } = useQuery({
    queryKey: ["getUserData"],
    queryFn: () => findUsersController("")
  })

  const { mutate } = useMutation({
    mutationKey: ["editProfile"],
    mutationFn: updateUsersController
  })

  

  return (
    <>
      <Helmet title="Informações pessoas" />
      <div className="w-full">
        <div className="flex flex-row justify-between">
          <Avatar className="h-20 w-20 bg-zinc-200">
            <AvatarImage src="" className="" />
            <AvatarFallback>Profile Picture</AvatarFallback>
          </Avatar>
          <Button className="gap-2">
            <NotePencil size={24} />
            Editar perfil
          </Button>
        </div>

        <form action="" className="mt-10">
          <div className="flex w-full flex-row gap-4">
            <div className="w-full">
              <Label className="font-regular text-xs">Nome</Label>
              <Input value={data.name}/>
            </div>
            <div className="w-full">
              <Label className="font-regular text-xs">Identidade</Label>
              <Input value={data.identity}/>
            </div>
          </div>
          <div className="mt-4 flex w-full flex-row gap-4">
            <div className="w-full">
              <Label className="font-regular text-xs">Endereço de email</Label>
              <Input value={data.email}/>
            </div>
            <div className="w-full">
              <Label className="font-regular text-xs">Senha</Label>
              <Input value={data.password}/>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
