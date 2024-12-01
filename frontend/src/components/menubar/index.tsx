import { NavLink } from '../nav-link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

export function Menubar() {
  return (
    <div className='flex flex-wrap items-center gap-2 border-b py-2'>
      <NavLink to='/profile' className='w-full sm:w-max text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-zinc-100 transition data-[current=true]:bg-zinc-100 p-2 rounded-lg data-[current=true]:text-foreground'>Meu Perfil</NavLink>
      <NavLink to='/profile/orders' className='w-full sm:w-max text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-zinc-100 transition data-[current=true]:bg-zinc-100 p-2 rounded-lg data-[current=true]:text-foreground'>Meus Pedidos</NavLink>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-muted-foreground w-full md:w-max'>Área do vendedor</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='w-[200px] p-2 space-y-2'>
                <NavigationMenuLink asChild>
                  <NavLink to='/profile/dashboard'>Dashboard</NavLink>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <NavLink to='/profile/my-shop'>Página da loja</NavLink>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <NavLink to='/profile/products'>Produtos</NavLink>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <NavLink to='/profile/categories'>Categorias</NavLink>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>

    </div>
  )
}
