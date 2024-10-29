import { createBrowserRouter } from 'react-router-dom'

import { AdminLayout } from './_layouts/admin'
import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { Dashboard } from './admin/dashboard'
import { Home } from './app/home'
import { Profile } from './app/profile'
import { Login } from './auth/login'
import { Register } from './auth/register'
import { Verify } from './auth/verify'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
  {
    path: '/',
    element: <AdminLayout />,
    children: [{ path: '/admin/dashboard', element: <Dashboard /> }],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/login/verify', element: <Verify /> },
      { path: '/register', element: <Register /> },
    ],
  },
])
