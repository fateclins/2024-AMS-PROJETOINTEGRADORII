import { listProductsController, Product } from '@/api/shop/products/list';
import { Pagination } from '@/components/pagination';
import { ProductCard } from '@/components/product-card';
import { useQuery } from '@tanstack/react-query';

export function RelatedProduct () {
  const { data: products } = useQuery({
    queryKey: ["listProduct"],
    queryFn: () => listProductsController({ filter: {}, pagination: { getLimit: 3 } }),
  });

  function handlePaginate() {
    console.log('paginação')
  }

  return (
    <div className="flex flex-col gap-4 pb-8">
      <h2 className="text-2xl font-bold">Produtos Relacionados</h2>

      <div className='flex w-full flex-col items-center lg:grid lg:grid-cols-3 gap-4'>
        {products && products.data.map((product: Product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>

      <Pagination
        onPageChange={handlePaginate}
        pageIndex={0}
        totalCount={100}
        perPage={10}
      />
    </div>
  )
}
