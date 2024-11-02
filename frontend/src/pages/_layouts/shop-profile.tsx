import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header/index'
import { Menubar } from '@/components/menubar'
import { GlobalProvider } from '../contexts/global-context'

export const ProfileLayout = function () {
  return (
    <GlobalProvider>
      <div className="flex flex-col items-center">
        <Header />
        <div className="flex flex-col gap-4 md:grid md:grid-cols-[300px_1fr] max-w-[1140px] w-full my-24 px-4">
          <Menubar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  )
}
