import { Outlet } from 'react-router-dom'

import { Menubar } from '@/components/menubar'

export function ProfileLayout() {
  return (
    <div className='flex flex-col gap-4'>
      <Menubar />
      <Outlet />
    </div>
  )
}
