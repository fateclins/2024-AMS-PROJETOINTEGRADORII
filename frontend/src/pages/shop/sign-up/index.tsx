import { Helmet } from 'react-helmet-async'

import { Content } from './components/content'

export function SignUp () {
  return (
    <>
      <Helmet title="Registrar-se" />
      <div className='max-w-lg w-full mx-auto'>
        <Content />
      </div>
    </>
  )
}
