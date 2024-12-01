import { ProductCard } from '@/components/product-card';

interface Product {
  products: {
    id: number;
    quantity: number;
    value: number;
    name: string;
    description: string;
    model: string;
    bestsellerProduct: boolean;
    idv1: number;
    idv2: number;
    idStore: number;
  }[] | undefined
}

export function Bestseller ({ products }: Product) {
  return (
    <div className="mt-20 space-y-4 w-full">
      <h1 className="text-left text-2xl font-semibold">
        Produtos
      </h1>
      <div className="grid grid-cols-4 gap-6">
        {products && products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}
