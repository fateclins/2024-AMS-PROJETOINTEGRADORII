import { Helmet } from 'react-helmet-async'
import { StarRating } from '@/components/star-rating'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Heart } from 'lucide-react'
import { RelatedProduct } from './components/related-product'
import { useParams } from 'react-router-dom'
import { findProductsController } from '@/api/shop/products/find'
import { useQuery } from '@tanstack/react-query'

export function Product () {
  const { id } = useParams()

  const { data: product } = useQuery({
    queryKey: ["findProduct", id],
    queryFn: () => findProductsController(Number(id)),
    enabled: !!id,
  });

  return (
    <>
      <Helmet title={product?.nome} />
      <div className="flex flex-col w-full max-w-[1140px] px-4 gap-4 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col lg:grid-cols-2 lg:grid gap-4">
            <div className='w-full h-96 bg-muted rounded-lg object-cover' />

            <div className="flex w-full flex-col items-start justify-center gap-6">
              <div className='space-y-2 w-full'>
                <div className="flex w-full flex-row items-center justify-between">
                  <h1 className="text-2xl font-bold">{product?.nome}</h1>
                  {product?.qtde > 0 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-md bg-green-100 text-green-600"
                  >
                    Em estoque
                  </Badge>
                  ) : (
                  <Badge
                    variant="secondary"
                    className="rounded-md bg-rose-100 text-rose-600"
                  >
                    Sem estoque
                  </Badge>
                  )}


                </div>
                <h6 className="text-sm text-muted-foreground">{product?.modelo}</h6>
                <span className="text-2xl font-semibold">R$ {product?.valor}</span>

                <StarRating rating={3 } totalStars={5} />
              </div>

              <div className='space-y-4'>
                <div className='space-y-2'>
                  <strong>Cor</strong>
                  <div className="flex gap-2">
                    {Array.from({ length: 5 }).map((_, index) => {
                      return (
                        <div
                          key={index}
                          className="h-[36px] w-[36px] rounded bg-zinc-400"
                        ></div>
                      )
                    })}
                  </div>
                </div>

                <div className='space-y-2'>
                  <strong>Tamanho</strong>
                  <div className="flex gap-2">
                    {Array.from({ length: 5 }).map((_, index) => {
                      return (
                        <div
                          key={index}
                          className="h-[36px] w-[36px] rounded bg-zinc-400"
                        ></div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center gap-2">
                <Button className='w-full'>Adicionar ao carrinho</Button>
                <Button variant='outline'>
                  <Heart className='size-4' />
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="descriptions" className="m-0 mt-7 w-full p-0">
            <TabsList className="m-0 mb-3 flex w-full flex-row justify-start gap-6 rounded-none border-b-[1px] bg-transparent p-0">
              <TabsTrigger
                value="descriptions"
                className="m-0 h-full rounded-none p-0 text-lg visited:text-foreground focus:h-[43px] focus:border-b-[3px] focus:border-b-zinc-900 disabled:text-muted-foreground"
              >
                Descrição
              </TabsTrigger>
              <TabsTrigger
                value="review"
                className="m-0 h-full rounded-none p-0 text-lg visited:text-foreground focus:h-[43px] focus:border-b-[3px] focus:border-b-zinc-900 disabled:text-muted-foreground"
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger
                value="comment"
                className="m-0 h-full rounded-none p-0 text-lg visited:text-foreground focus:h-[43px] focus:border-b-[3px] focus:border-b-zinc-900 disabled:text-muted-foreground"
              >
                Comentar
              </TabsTrigger>
            </TabsList>
            <TabsContent value="descriptions" className="m-0 p-0">
              <div className="border-b flex flex-col gap-4 border-b-zinc-100 pb-4">
                <p className='max-w-xl'>
                  {product?.descricao}
                </p>

                <div className='space-y-2'>
                  <div className="flex gap-5">
                    <strong>Cor</strong>
                    <p>Red, Green, Orange</p>
                  </div>
                  <div className="flex gap-5">
                    <strong>Size</strong>
                    <p>S, M, L, XL, XXL</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="review">
              <div className="mt-5">
                <strong className="">Comentários dos consumidores</strong>
                <div className="mt-2">
                  {Array.from({ length: 5 }).map((_, index) => {
                    return (
                      <div
                        key={index}
                        className="border-b-[1px] border-b-zinc-200 py-4"
                      >
                        <div className="mb-3 flex flex-row gap-4">
                          <img src="" alt="" className="h-[50px] w-[50px]" />
                          <div className="flex flex-col">
                            <p>John Doe</p>
                            <StarRating rating={5} totalStars={5} />
                          </div>
                        </div>

                        <strong>Commento titulum</strong>

                        <p className="mb-3 mt-2">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                          Deserunt possimus eius nulla harum tempore facilis
                          voluptas et ipsa animi beatae! Repellat iste expedita
                          sapiente, nihil laborum fugit eveniet esse harum.
                        </p>

                        <span className="text-zinc-400">
                          Posted on Jone 05, 2023
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="comment">
              <div className="mt-5">
                <strong>Adicionar seu comentário</strong>
                <form action="" className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Label>Sua nota</Label>
                    <RadioGroup
                      defaultValue="option-one"
                      className="mt-1 flex flex-row"
                    >
                      <div className="flex items-center">
                        <RadioGroupItem
                          value="1"
                          id="1"
                          className="h-0 w-0 border-none bg-transparent"
                        />
                        <Label htmlFor="1">
                          <StarRating
                            disabledColorStars="text-zinc-200"
                            colorStars="text-yellow-500"
                            rating={0}
                            totalStars={1}
                          />
                        </Label>
                      </div>
                      <Separator
                        orientation="vertical"
                        className="h-6 bg-zinc-200"
                      />
                      <div className="flex items-center">
                        <RadioGroupItem
                          value="2"
                          id="2"
                          className="h-0 w-0 border-none bg-transparent"
                        />
                        <Label htmlFor="2">
                          <StarRating
                            disabledColorStars="text-zinc-200"
                            colorStars="text-yellow-500"
                            rating={0}
                            totalStars={2}
                          />
                        </Label>
                      </div>
                      <Separator
                        orientation="vertical"
                        className="h-6 bg-zinc-200"
                      />
                      <div className="flex items-center">
                        <RadioGroupItem
                          value="3"
                          id="3"
                          className="h-0 w-0 border-none bg-transparent"
                        />
                        <Label htmlFor="3">
                          <StarRating
                            disabledColorStars="text-zinc-200"
                            colorStars="text-yellow-500"
                            rating={0}
                            totalStars={3}
                          />
                        </Label>
                      </div>
                      <Separator
                        orientation="vertical"
                        className="h-6 bg-zinc-200"
                      />
                      <div className="flex items-center">
                        <RadioGroupItem
                          value="4"
                          id="4"
                          className="h-0 w-0 border-none bg-transparent"
                        />
                        <Label htmlFor="4">
                          <StarRating
                            disabledColorStars="text-zinc-200"
                            colorStars="text-yellow-500"
                            rating={0}
                            totalStars={4}
                          />
                        </Label>
                      </div>
                      <Separator
                        orientation="vertical"
                        className="h-6 bg-zinc-200"
                      />
                      <div className="flex items-center">
                        <RadioGroupItem
                          value="5"
                          id="5"
                          className="h-0 w-0 border-none bg-transparent"
                        />
                        <Label htmlFor="5">
                          <StarRating
                            disabledColorStars="text-zinc-200"
                            colorStars="text-yellow-500"
                            rating={0}
                            totalStars={5}
                          />
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Seu comentário</Label>
                    <Textarea id="comment" name="comment" className="mt-1" />
                  </div>
                  <Button>Enviar</Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <RelatedProduct />
      </div>
    </>
  )
}
