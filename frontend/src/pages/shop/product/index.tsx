import { Helmet } from 'react-helmet-async'

import { ProductInfo } from './components/product-info'
import { RelatedProduct } from './components/related-product'

export function Product () {
  return (
    <>
      <Helmet title="Product Name" />
      <div className="flex h-full w-full flex-wrap justify-center">
        <div className="my-14">
          <ProductInfo />
          <RelatedProduct />
        </div>
      </div>
    </>
  )
}
