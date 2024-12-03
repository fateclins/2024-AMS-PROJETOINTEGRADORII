import { ShoppingBag } from '@phosphor-icons/react'
import { useState } from 'react'


import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { LogOut, Search } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { AvatarImage } from '@radix-ui/react-avatar'

export function Header() {
  const navigate = useNavigate()
  
  const token = localStorage.getItem('token')
  const nome = localStorage.getItem('nome')
  const email = localStorage.getItem('email')
  const imagem = localStorage.getItem('imagem')

  const { register, handleSubmit, reset } = useForm()

  function handleSearch(data: any) {
    navigate(`/products?nome=${data.search}`)

    reset()
  }

  function handleSignOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('nome')
    localStorage.removeItem('email')
    localStorage.removeItem('imagem')

    navigate('/sign-in')
  }

  return (
    <header className="fixed z-50 border-b top-0 left-0 p-8 flex h-11 w-full items-center bg-background justify-between">
      <Link to='/' className="text-xl font-semibold">FirstTech</Link>

      <form onSubmit={handleSubmit(handleSearch)} className='relative max-w-sm w-full'>
        <Input placeholder='Buscar por produtos...' className='pl-8' {...register('search')} />

        <Search className='absolute inset-y-1/2 -translate-y-1/2 size-4 text-muted-foreground left-2' />
      </form>

      {token ? (
        <div className="flex items-center gap-3">
          <Button variant='ghost' size='icon' asChild>
            <Link to='/checkout'>
              <ShoppingBag className='size-5' />
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-2'>
              <Avatar>
                {imagem &&  <AvatarImage src={imagem} />}
                <AvatarFallback />
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align='end'>
              <div className='flex items-center gap-2 p-2'>
              <Avatar>
                  {imagem &&  <AvatarImage src={imagem} />}
                  <AvatarFallback />
                </Avatar>
                <div className='flex flex-col gap-1 text-left'>
                  {nome && <span className='text-sm font-semibold'>{nome}</span>}
                  {email && <span className='text-xs text-muted-foreground'>{email}</span>}
                </div>

              </div>

              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <button className='w-full text-rose-500 justify-center font-medium flex items-center gap-2' onClick={handleSignOut}>
                  <LogOut className='size-4' />
                  Sair
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant='ghost' asChild>
              <Link to='/sign-in'>
                Entrar
              </Link>
            </Button>
            <Button asChild>
              <Link to='/sign-up'>
                Registrar-se
              </Link>
            </Button>
          </div>
        )}
    </header>
  )
}
