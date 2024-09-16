import { createBrowserRouter } from 'react-router-dom'

import { AdminLayout } from './_layouts/admin'
import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { ShopLayout } from './_layouts/shop'
import { ProfileLayout } from './_layouts/shop-profile'
import { Dashboard } from './admin/dashboard'
import { Home } from './app/home'
import { Profile } from './app/profile'
import { Login } from './auth/login'
import { Register } from './auth/register'
import { Verify } from './auth/verify'
import { Checkout } from './shop/checkout'
import { ForgotPassword } from './shop/forgot-password'
import { Home as ShopHome } from './shop/home'
import { ManageAddresses } from './shop/manage-addresses'
import { Notifications } from './shop/notifications'
import { Orders } from './shop/orders'
import { PersonalInformation } from './shop/personal-information'
import { ProceedCheckout } from './shop/proceed-checkout'
import { Product } from './shop/product'
import { ProductList } from './shop/product-list'
import { ResetPassword } from './shop/reset-password'
import { SavedCards } from './shop/saved-cards'
import { Settings } from './shop/settings'
import { SignIn } from './shop/sign-in'
import { SignUp } from './shop/sign-up'
import { Wishes } from './shop/wishes'

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
  {
    path: '/',
    element: <ShopLayout />,
    children: [
      {
        path: '/shop',
        element: <ShopHome />,
      },
      {
        path: '/shop/product-list',
        element: <ProductList />,
      },
      {
        path: '/shop/product',
        element: <Product />,
      },
      {
        path: '/shop/sign-in',
        element: <SignIn />,
      },
      {
        path: '/shop/sign-up',
        element: <SignUp />,
      },
      {
        path: '/shop/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/shop/reset-password',
        element: <ResetPassword />,
      },
      {
        path: '/shop/checkout',
        element: <Checkout />,
      },
      {
        path: '/shop/shipping-address',
        element: <ProceedCheckout />,
      },
    ],
  },
  {
    path: '/shop/profile',
    element: <ProfileLayout />,
    children: [
      {
        path: '/shop/profile/orders',
        element: <Orders />,
      },
      {
        path: '/shop/profile/personal-information',
        element: <PersonalInformation />,
      },
      {
        path: '/shop/profile/wishes',
        element: <Wishes />,
      },
      {
        path: '/shop/profile/manage-addresses',
        element: <ManageAddresses />,
      },
      {
        path: '/shop/profile/saved-cards',
        element: <SavedCards />,
      },
      {
        path: '/shop/profile/notifications',
        element: <Notifications />,
      },
      {
        path: '/shop/profile/settings',
        element: <Settings />,
      },
    ],
  },
])
