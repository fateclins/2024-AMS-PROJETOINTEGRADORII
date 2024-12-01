import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header/index'
import { Menubar } from '@/components/menubar'
import { GlobalProvider } from '../contexts/global-context'

export const ProfileLayout = function () {
  return (
    <GlobalProvider>
      <div className="flex flex-col min-h-screen items-center justify-between">
        <Header />
        <div className="flex flex-col gap-4 max-w-[1140px] w-full my-24 px-4">
          <Menubar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  )
}
