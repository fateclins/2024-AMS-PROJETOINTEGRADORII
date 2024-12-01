import { Helmet } from 'react-helmet-async'

import { ProductInfo } from './components/product-info'
import { RelatedProduct } from './components/related-product'

export function Product () {
  return (
    <>
      <Helmet title="Product Name" />
      <div className="flex flex-col w-full max-w-[1140px] px-4 gap-4 mx-auto">
        <ProductInfo />
        <RelatedProduct />
      </div>
    </>
  )
}
