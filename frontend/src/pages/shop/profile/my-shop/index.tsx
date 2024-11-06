import { Helmet } from 'react-helmet-async'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function MyShop() {
  return (
    <>
      <Helmet title="Minha loja" />
      <div className="w-full space-y-4">
        <h2 className="text-xl font-semibold">Minha loja</h2>

        <div className='w-full h-32 rounded-lg bg-muted flex items-center justify-center'>
          <span className='text-sm text-muted-foreground'>Banner da loja</span>
        </div>

        <Avatar className='size-16'>
          <AvatarImage src="" />
          <AvatarFallback>LJ</AvatarFallback>
        </Avatar>
        <Button size='sm' variant='secondary'>
          Editar avatar
        </Button>

        <form className="space-y-4">
          <div className="w-full">
            <Label>Nome</Label>
            <Input defaultValue='John Doe' disabled />
          </div>
          <div className="w-full">
            <Label>CNPJ</Label>
            <Input defaultValue='12345678900-0001' disabled />
          </div>

          <div className='flex justify-end'>
            <Button size='sm' disabled>Salvar</Button>
          </div>
        </form>
      </div>
    </>
  )
}
