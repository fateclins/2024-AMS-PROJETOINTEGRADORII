import { createBrowserRouter } from 'react-router-dom'

import { ShopLayout } from './_layouts/shop'
import { ProfileLayout } from './_layouts/profile'
import { Checkout } from './shop/checkout'
import { ForgotPassword } from './shop/forgot-password'
import { Home as ShopHome } from './shop/home'
import { ManageAddresses } from './shop/profile/manage-addresses'
import { Notifications } from './shop/profile/notifications'
import { Orders } from './shop/profile/orders'
import { ProceedCheckout } from './shop/proceed-checkout'
import { Product } from './shop/product'
import { ProductList } from './shop/product-list'
import { ResetPassword } from './shop/reset-password'
import { SavedCards } from './shop/profile/saved-cards'
import { Settings } from './shop/profile/settings'
import { SignIn } from './shop/sign-in'
import { SignUp } from './shop/sign-up'
import { Wishes } from './shop/profile/wishes'
import { Profile } from './shop/profile'
import { Dashboard } from './shop/profile/dashboard'
import { Products } from './shop/profile/products'
import { Categories } from './shop/profile/categories'
import { MyShop } from './shop/profile/my-shop'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ShopLayout />,
    children: [
      {
        path: '/',
        element: <ShopHome />,
      },
      {
        path: '/products',
        element: <ProductList />,
      },
      {
        path: '/products/:id',
        element: <Product />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/reset-password',
        element: <ResetPassword />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/shipping-address',
        element: <ProceedCheckout />,
      },
      {
        path: '/profile',
        element: <ProfileLayout />,
        children: [
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            path: '/profile/dashboard',
            element: <Dashboard />,
          },
          {
            path: '/profile/products',
            element: <Products />,
          },
          {
            path: '/profile/categories',
            element: <Categories />,
          },
          {
            path: '/profile/my-shop',
            element: <MyShop />,
          },
          {
            path: '/profile/orders',
            element: <Orders />,
          },
          {
            path: '/profile/wishes',
            element: <Wishes />,
          },
          {
            path: '/profile/address',
            element: <ManageAddresses />,
          },
          {
            path: '/profile/saved-cards',
            element: <SavedCards />,
          },
          {
            path: '/profile/notifications',
            element: <Notifications />,
          },
          {
            path: '/profile/settings',
            element: <Settings />,
          },
        ],
      },
    ],
  },
])
