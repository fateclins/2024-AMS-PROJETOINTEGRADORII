import { Helmet } from 'react-helmet-async'

import { Content } from './components/content'

export function SignIn () {
  return (
    <>
      <Helmet title="Entrar" />
      <div className='max-w-lg w-full mx-auto'>
        <Content />
      </div>
    </>
  )
}
