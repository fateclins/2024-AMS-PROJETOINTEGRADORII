import { Helmet } from 'react-helmet-async'

import { Navigation } from '@/components/navigation'

import { Filter } from './components/filter'
import { Main } from './components/main'

export function ProductList () {
  return (
    <>
      <Helmet title="Pesquisa de Produtos" />
      <div className="flex h-full w-full flex-col items-center">
        <div className="w-full flex">
          <div className="w-full max-w-sm">
            <Navigation />
            <Filter />
          </div>
          <Main />
        </div>
      </div>
    </>
  )
}
