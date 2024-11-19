import { Helmet } from 'react-helmet-async'

import { Card } from './components/card'
import { Content } from './components/content'

export function ProceedCheckout () {
  return (
    <>
      <Helmet title="Prosseguir com o Checkout" />
      <div className="flex h-full w-full flex-col items-center">
        <div className="mb-20 flex w-[1140px] flex-row items-stretch gap-20">
          <Content />
          <Card />
        </div>
      </div>
    </>
  )
}
