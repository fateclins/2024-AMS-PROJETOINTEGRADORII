import { Helmet } from 'react-helmet-async'

import { Card } from './components/card'
import { Content } from './components/content'

export function Checkout () {
  return (
    <>
      <Helmet title="Checkout" />
      <div className="flex h-full w-full flex-col items-center">
        <h1 className="w-full text-3xl font-medium text-zinc-950">
          Checkout de compras
        </h1>
        <div className="mb-20 flex flex-row items-stretch gap-20">
          <Content />
          <Card />
        </div>
      </div>
    </>
  )
}
