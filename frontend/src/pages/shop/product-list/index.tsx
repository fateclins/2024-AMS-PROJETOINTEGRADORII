import { Helmet } from 'react-helmet-async'

import { Navigation } from '@/components/navigation'

import { Filter } from './components/filter'
import { Main } from './components/main'

export function ProductList () {
  return (
    <>
      <Helmet title="Pesquisa de Produtos" />
      <div className="flex h-full w-full flex-col items-center">
        <div className="flex flex-row gap-9">
          <div className="">
            <Navigation />
            <Filter />
          </div>
          <Main />
        </div>
      </div>
    </>
  )
}
