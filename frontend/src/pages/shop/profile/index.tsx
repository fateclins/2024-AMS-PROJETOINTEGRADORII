import { Helmet } from 'react-helmet-async'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export function Profile() {
  return (
    <>
      <Helmet title="Perfil" />
      <div className="w-full space-y-4">
      <h2 className="text-xl font-semibold">Perfil</h2>
        <Avatar className='size-16'>
          <AvatarImage src="" />
          <AvatarFallback>JD</AvatarFallback>
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
            <Label>E-mail</Label>
            <Input defaultValue='john@acme.com' disabled />
          </div>
          <div className="w-full">
            <Label>Documento</Label>
            <Input defaultValue='1234567890' disabled />
          </div>

          <div className='flex justify-end'>
            <Button size='sm' disabled>Salvar</Button>
          </div>
        </form>

        <Separator />

        <h2 className="text-xl font-semibold">Endereço</h2>

        <RadioGroup defaultValue="default">
          <div className="flex items-center space-x-2 border p-4 rounded-lg">
            <RadioGroupItem value="default" id="r1" />
            <div className='flex flex-col gap-2'>
              <Label htmlFor="r1">Padrão</Label>
              <span className='text-sm text-muted-foreground'>Rua das flores, Jardim - 123</span>
            </div>
          </div>
        </RadioGroup>

        <form className="space-y-4">
          <div className="w-full">
            <Label>CEP</Label>
            <Input defaultValue='123456-789' disabled />
          </div>
          <div className='flex lg:flex-row flex-col items-center gap-2'>
            <div className="w-full">
              <Label>Cidade</Label>
              <Input defaultValue='Rua das flores' disabled />
            </div>
            <div className="w-full">
              <Label>Estado</Label>
              <Input defaultValue='Jardim' disabled />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className="w-full">
              <Label>Rua</Label>
              <Input defaultValue='Rua das flores' disabled />
            </div>
            <div className="w-full max-w-[120px]">
              <Label>Número</Label>
              <Input defaultValue='123' disabled />
            </div>
          </div>
          <div className="w-full">
            <Label>Bairro</Label>
            <Input defaultValue='Jardim' disabled />
          </div>

          <div className='flex justify-end'>
            <Button size='sm' disabled>Salvar</Button>
          </div>
        </form>
      </div>
    </>
  )
}
