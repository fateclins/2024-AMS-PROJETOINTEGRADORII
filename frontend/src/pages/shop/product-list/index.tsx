import { Helmet } from 'react-helmet-async'

import { Navigation } from '@/components/navigation'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { useQuery } from '@tanstack/react-query'
import { listProductsController } from '@/api/shop/products/list'
import { ProductCard } from '@/components/product-card'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

export function ProductList () {
  const [searchParams] = useSearchParams()

  const nome = searchParams.get('nome')

  const [valor, setValor] = useState<number | null>(null)
  const { register, handleSubmit } = useForm()

  const { data: products, isLoading } = useQuery({
    queryKey: ["listProduct", valor, nome],
    queryFn: () => listProductsController({ filter: { valor, nome }, pagination: {} }),
    retry: 1,
  });

  function handleFilter(data: any) {
    if (data.valor != 0) {
      setValor(Number(data.valor))
    } else {
      setValor(null)
    }
  }

  return (
    <>
      <Helmet title="Pesquisa de Produtos" />
      <div className="flex h-full w-full flex-col items-center">
        <div className="w-full flex">
          <div className="w-full max-w-sm">
            <Navigation />

            <Accordion type="multiple" className="w-full p-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline">
                  Categorias de Produto
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center">
                    <Checkbox id="test" />
                    <label htmlFor="test" className="ml-3 font-medium">
                      Eletrônico
                    </label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline">
                  Filtrar por preço
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 p-2">
                    <form onSubmit={handleSubmit(handleFilter)}>
                      <Label htmlFor='valor'>Preço: $0 - R$5000</Label>
                      <Input id='valor' placeholder='Digite o preço do produto' {...register('valor')} />
                    </form>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
      
          <div className="space-y-6 pb-8 flex w-full flex-col items-center justify-center">
            <div className="flex w-full flex-row items-center justify-between">
              <div className="text-sm">Mostrando 1 - 20 de 800 resultados</div>
            </div>

            {isLoading && (
              <div className='h-80 flex items-center justify-center'>
                <Loader2 className='animate-spin size-4' />
              </div>
            )}

            <div className="w-full grid grid-cols-2 gap-4">
              {products && products.map((product) => {
                return <ProductCard key={product.id} product={product} />
              })}
            </div>

            {products && products.length < 1 && (
              <div className='py-8 w-full'>
                <p className='w-full'>Nenhum produto não encontrado!</p>
              </div>
            )}

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
        </div>
      </div>
    </>
  )
}
