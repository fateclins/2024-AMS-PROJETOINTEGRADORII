import { listProductsController } from '@/api/shop/products/list';
import { ProductCard } from '@/components/product-card';
import { useQuery } from '@tanstack/react-query';

export function RelatedProduct () {
  const { data: products } = useQuery({
    queryKey: ["listProduct"],
    queryFn: () => listProductsController({ filter: { valor: 10 }, pagination: {} }),
  });

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Produtos Relacionados</h2>

      <div className='flex flex-col items-center lg:grid lg:grid-cols-3 gap-4'>
        {products && products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}
