import { Heart, ShoppingBag } from '@phosphor-icons/react'
import { useState } from 'react'

import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { Button } from '../ui/button'
import { ProductRow } from './components/product-row'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Header() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <header className="fixed z-50 border-b top-0 left-0 p-8 flex h-11 w-full items-center bg-background justify-between">
      <Link to='/' className="text-xl font-semibold">FirstTech</Link>

      <form action="" className='relative max-w-sm w-full'>
        <Input placeholder='Buscar por produtos...' className='pl-8' />

        <Search className='absolute inset-y-1/2 -translate-y-1/2 size-4 text-muted-foreground left-2' />
      </form>

      {isAuth ? (
        <div className="flex items-center gap-3">
          <Heart size={20} weight="regular" />

          <Dialog>
            <DialogTrigger asChild>
              <ShoppingBag size={24} weight="regular" />
            </DialogTrigger>
            <DialogContent className="w-[352px] px-4">
              <DialogHeader>
                <DialogTitle>Você tem 5 items no seu carrinho</DialogTitle>
              </DialogHeader>
              <div className="">
                <ProductRow />
              </div>

              <div className="flex flex-row justify-between">
                <strong>Subtotal</strong>
                <strong>R$ 200.00</strong>
              </div>

              <Button className="border-2 border-zinc-950 bg-transparent text-zinc-950 hover:bg-zinc-950 hover:text-zinc-50">
                Ver carrinho
              </Button>
              <Button>Checkout de compras</Button>
            </DialogContent>
          </Dialog>

          <Avatar className='size-8'>
            <AvatarFallback />
          </Avatar>
        </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant='secondary' onClick={() => setIsAuth(true)}>
              Entrar
            </Button>
            <Button>
              Registrar-se
            </Button>
          </div>
        )}
    </header>
  )
}
