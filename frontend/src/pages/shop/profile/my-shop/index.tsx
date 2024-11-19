import { Helmet } from "react-helmet-async";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { findStore } from "@/api/shop/stores/find";
import { Skeleton } from "@/components/ui/skeleton";

export function MyShop() {
  const { data: storeData, isLoading: isStoreDataLoading } = findStore(1);

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

        <form className="space-y-4">
          <div className="w-full">
            <Label>Nome</Label>
            {isStoreDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Input value={storeData!.name} disabled />
            )}
          </div>
          <div className="w-full">
            <Label>CNPJ</Label>
            {isStoreDataLoading === true ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <Input value={storeData!.cnpj} disabled />
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
