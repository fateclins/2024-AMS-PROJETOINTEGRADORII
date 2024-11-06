import { NotePencil } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { findCategory } from "@/api/shop/categories/find";

export function Profile() {
  const { data } = findCategory(1);

  console.log(data)
  
  // async function handleSign() {
  //   try {
  //     await mutateAsync({ id: 572 });
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // handleSign()

  

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
              <Input defaultValue={""}/>
            </div>
            <div className="w-full">
              <Label className="font-regular text-xs">Identidade</Label>
              <Input defaultValue={""}/>
            </div>
          </div>
          <div className="mt-4 flex w-full flex-row gap-4">
            <div className="w-full">
              <Label className="font-regular text-xs">Endereço de email</Label>
              <Input defaultValue={""}/>
            </div>
            <div className="w-full">
              <Label className="font-regular text-xs">Senha</Label>
              <Input defaultValue={""}/>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
