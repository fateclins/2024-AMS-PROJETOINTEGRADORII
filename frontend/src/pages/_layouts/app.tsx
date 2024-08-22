import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <div className="mx-auto w-full max-w-[1024px] p-4 pt-8">
        <Outlet />
      </div>
    </div>
  )
}
