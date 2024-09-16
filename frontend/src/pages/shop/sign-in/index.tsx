import React from 'react'
import { Helmet } from 'react-helmet-async'

import { Content } from './components/content'
import { Image } from './components/image'

export const SignIn: React.FC = function () {
  return (
    <>
      <Helmet title="Entrar" />
      <div className="flex h-full w-full flex-row items-center">
        <Image />
        <Content />
      </div>
    </>
  )
}
