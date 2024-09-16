import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header/index'
import { Menubar } from '@/components/menubar'

export const ProfileLayout = function () {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="mt-16 flex w-[1140px] flex-row">
        <Menubar />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
