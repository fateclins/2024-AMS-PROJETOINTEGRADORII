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
    <div className='flex items-center gap-4 border-b py-2'>
      <NavLink to='/profile'>Meu Perfil</NavLink>
      <NavLink to='/profile/orders'>Meus Pedidos</NavLink>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-muted-foreground'>Área do vendedor</NavigationMenuTrigger>
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
