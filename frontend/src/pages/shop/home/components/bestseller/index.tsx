import { ProductCard } from '@/components/product-card'
import { Link } from 'react-router-dom'

const data = {
  products: [
    {
      id: '1',
      title: 'IPhone 16',
      description: 'Descrição do produto aqui...',
      image: 'https://fastshopbr.vtexassets.com/arquivos/ids/633560/0_AEMYX03BEAPTO_PRD_1500_1.jpg?v=638630405201070000',
      price: 3200,
    },
    {
      id: '2',
      title: 'IPhone 16',
      description: 'Descrição do produto aqui...',
      image: 'https://fastshopbr.vtexassets.com/arquivos/ids/633560/0_AEMYX03BEAPTO_PRD_1500_1.jpg?v=638630405201070000',
      price: 200,
    },
    {
      id: '1',
      title: 'Produto',
      description: 'Descrição do produto aqui...',
      image: 'https://fastshopbr.vtexassets.com/arquivos/ids/633560/0_AEMYX03BEAPTO_PRD_1500_1.jpg?v=638630405201070000',
      price: 200,
    },
  ]
}

export function Bestseller () {
  return (
    <div className="mt-20 space-y-4 w-full">
      <div className='flex items-center justify-between'>
        <h1 className="text-left text-2xl font-semibold">
          Produtos mais vendidos
        </h1>

        <Link to='/products' className='text-sm'>
          Ver mais
        </Link>
      </div>
      <main className="grid grid-cols-4 gap-6">
        {data.products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </main>
    </div>
  )
}
