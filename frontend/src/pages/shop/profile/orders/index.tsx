import { MagnifyingGlass } from '@phosphor-icons/react'
import { Helmet } from 'react-helmet-async'

import { Input } from '@/components/ui/input'

import { OrderItem } from './components/order-item'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="space-y-2.5">
        <div className="flex w-full justify-between">
          <h2 className='text-xl font-semibold'>Meus Pedidos</h2>
          <form className="relative">
            <Input placeholder="Pesquisar" className='pl-8 h-9' />

            <MagnifyingGlass className='left-2 top-1/2 -translate-y-1/2 size-4 absolute pointer-events-none' />
          </form>
        </div>
        <div className="w-full">
          {Array.from({ length: 4 }).map((_, index) => {
            return <OrderItem key={index} />
          })}
        </div>
      </div>
    </>
  )
}
