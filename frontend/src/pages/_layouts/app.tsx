import { Outlet } from 'react-router-dom'
import { GlobalProvider } from '../contexts/global-context'

export function AppLayout() {
  return (
    <GlobalProvider>
      <Outlet />
    </GlobalProvider>
  )
}
