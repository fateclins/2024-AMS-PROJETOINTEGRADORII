import { Eye, ShoppingCart, Star } from '@phosphor-icons/react'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ProductCard } from '@/components/product-card'

export function Main() {
  return (
    <div className="mt-14 flex w-[847px] flex-col items-center justify-center">
      <header className="mb-3 flex w-full flex-row items-center justify-between">
        <div className="text-sm">Mostrando 1 - 20 de 800 resultados</div>
        <Select>
          <SelectTrigger className="w-[90px] border-none focus:outline-none focus:ring-0">
            <SelectValue placeholder="Listar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="az">A - Z</SelectItem>
            <SelectItem value="za">Z - A</SelectItem>
          </SelectContent>
        </Select>
      </header>
      <main className="grid grid-cols-3 gap-4">
        {Array.from({ length: 40 }).map((_, index) => {
          return (
            <ProductCard key={index} />
          )
        })}
      </main>
      <div>
        <Pagination className="">
          <PaginationContent className="">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
