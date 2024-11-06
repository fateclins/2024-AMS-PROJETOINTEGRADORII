import { Pagination } from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Ellipsis, Plus, Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

export function Products() {{
  const [searchParams, setSearchParams] = useSearchParams()


  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Produtos</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size='sm'>
              <Plus className="size-4 mr-2" />
              Adicionar produto
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar produto</DialogTitle>
              <DialogDescription>
                Adicione um novo produto para sua loja.
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-4">
              <div className="space-y-1">
                <Label>Modelo</Label>
                <Input className="h-9" />
              </div>
              <div className="space-y-1">
                <Label>Descrição</Label>
                <Input className="h-9" />
              </div>

              <div className="space-y-1">
                <Label>Categoria</Label>
                <Input className="h-9" />
              </div>

              <div className="space-y-1">
                <Label>Valor</Label>
                <Input className="h-9" />
              </div>

              <div className="space-y-1">
                <Label>Quantidade</Label>
                <Input className="h-9" />
              </div>

              <div className="flex items-center gap-2 justify-end">
                <DialogClose asChild>
                  <Button type="button" variant='ghost'>Cancelar</Button>
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
              <TableHead>Modelo</TableHead>
              <TableHead >Categoria</TableHead>
              <TableHead >Valor</TableHead>
              <TableHead >Qtde. Estoque</TableHead>
              <TableHead className="w-[64px]"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="w-full">
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                          <Search className="h-3 w-3" />
                          <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                      </DialogTrigger>
      
                      
                    </Dialog>
                  </TableCell>
                  <TableCell className="font-mono text-xs font-medium">
                    Tenis Nike Azul
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    Tênis
                  </TableCell>
                  <TableCell>
                    R$ 100,00
                  </TableCell>
                  <TableCell className="font-medium">25</TableCell>
                  <TableCell className="font-medium">
                    <Button size='icon' variant='ghost'>
                      <Ellipsis className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>

      <Pagination
        onPageChange={handlePaginate}
        pageIndex={pageIndex}
        totalCount={20}
        perPage={10}
      />
    </div>
  )
}}