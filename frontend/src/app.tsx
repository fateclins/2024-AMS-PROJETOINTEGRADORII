import './index.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { queryClient } from './lib/react-query'
import { router } from './pages/routes'
import { CartProvider } from './contexts/cart-context'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Firsttech" />
      <Toaster richColors />
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}
