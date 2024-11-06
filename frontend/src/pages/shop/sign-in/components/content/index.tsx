import { Link } from 'react-router-dom'
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { z } from 'zod'

const signInValidationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  remember: z.coerce.boolean(),
})

type SignInValidationSchema = z.infer<typeof signInValidationSchema>

export function Content () {

  const { handleSubmit, register, watch, formState, control } = useForm<SignInValidationSchema>({
    resolver: zodResolver(signInValidationSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false
    }
  })

  function handleSignIn(data: any) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="m-auto flex w-[445px] flex-col flex-wrap">
      <h1 className="text-3xl font-bold">Bem-vindo</h1>
      <p className="mt-1 text-base font-normal text-zinc-500">
        Faça login aqui
      </p>
      <div className="mt-6">
        <label htmlFor="" className="text-base font-medium">
          E-mail
        </label>
        <Input id="email" {...register("email")} value={watch('email')}/>
      </div>
      <div className="mt-3">
        <label htmlFor="" className="text-base font-medium">
          Senha
        </label>
        <Input id="password" {...register("password")} value={watch('password')}/>
      </div>

      <div className="mt-3 flex justify-between">
        <div className="flex items-center">
          {/* <Controller
            control={control}
            name='remember'
            render={
              function({ field }) {
                return ( */}
                  <Checkbox id="remember" {...register("remember")}/>
          {/*       )
               }
            }
           /> */}
          <label htmlFor="remember" className="ml-2">
            Lembrar-me sempre
          </label>
        </div>
        <Link to={'/reset-password'}>Esqueceu a senha?</Link>
      </div>
      <Button className="mt-6" type='submit'>Entrar</Button>
    </form>
  )
}
