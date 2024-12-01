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
import { listProductsController } from '@/api/shop/products/list'
import { useQuery } from '@tanstack/react-query'

export function Main() {
  const { data: products } = useQuery({
    queryKey: ["listProduct"],
    queryFn: () => listProductsController({ filter: { valor: 99.99 }, pagination: {} }),
    retry: 1,
  });

  return (
    <div className="space-y-6 pb-8 flex w-full flex-col items-center justify-center">
      <header className="flex w-full flex-row items-center justify-between">
        <div className="text-sm">Mostrando 1 - 20 de 800 resultados</div>
      </header>
      <main className="w-full grid grid-cols-2 gap-4">
        {products && products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}

        {products && products.length < 1 && (
          <div className='py-8 w-full bg-red-500'>
            <p className='w-full'>Nenhum produto não encontrado!</p>
          </div>
        )}
      </main>

      <Pagination>
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
  )
}
