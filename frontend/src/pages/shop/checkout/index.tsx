import { Helmet } from 'react-helmet-async'

import { Trash } from '@phosphor-icons/react'

import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/cart-context';


export function Checkout () {
  const { cart, clearCart } = useCart()

  return (
    <>
      <Helmet title="Checkout" />
      <div className="flex h-full w-full gap-4 flex-col items-center">
        <h1 className="w-full text-3xl font-medium text-zinc-950">
          Checkout de compras
        </h1>
        <table className="w-full">
              <thead>
                <tr className="mb-5 w-full border-b-[1px] border-zinc-200">
                  <th className="pb-5 text-left">Produto</th>
                  <th className="pb-5 text-left">Preço</th>
                  <th className="pb-5 text-left">Quantidade</th>
                  <th className="pb-5 text-left">Subtotal</th>
                  <th className="pb-5 text-left">
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {cart && cart.items.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className="w-full border-b-[1px] border-zinc-200"
                    >
                      <td className="w-[355px] py-6">
                        <div className="flex items-center gap-4">
                          <img src={item.imagem} className='size-20 rounded-lg' />
                          <div className="mr-[10px] flex flex-col">
                            <span className="block text-base font-bold">
                            {item.nome}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="w-[93px] py-6">R$ {item.valor}</td>
                      <td className="w-[187px] py-6">
                      {item.qtde}
                      </td>
                      <td className="w-[96px] py-6">R$ {Number(item.valor) * item.qtde}</td>
                    </tr>
                  )
                })}

                {cart.items.length === 0 && (
                  <p className='text-muted-foreground text-lg py-8'>Nenhum produto no carrinho.</p>
                )}
              </tbody>
            </table>

            <div className='w-full py-4 flex items-center justify-between'>
              <p className='text-xl'>Total:</p>
              <p className='text-xl font-semibold'>R$ {cart.total}</p>
            </div>
            
          <div className='flex items-center gap-2 w-full'>
            <Button className='w-full' variant='outline' onClick={clearCart} disabled={cart.items.length === 0}>Limpar carrinho</Button>
            <Button className='w-full'>Finalizar pedido</Button>
          </div>
      </div>
    </>
  )
}
