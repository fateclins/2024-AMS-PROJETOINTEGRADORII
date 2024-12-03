import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { Loader2 } from "lucide-react"
import { api } from "@/lib/axios"

const signInValidationSchema = z.object({
  email: z.string().email(),
  senha: z.string(),
})

type SignInValidationSchema = z.infer<typeof signInValidationSchema>

interface SignInResponse {
  email: string
  senha: string
}

async function signIn({ email, senha }: SignInResponse) {
  const response = await api.post('/login', {
    email,
    senha
  })

  console.log(response.data)

  return response.data
}

export function Content () {
  const { handleSubmit, register, formState: { isSubmitting } } = useForm<SignInValidationSchema>({
    resolver: zodResolver(signInValidationSchema),
  })

  async function handleSignIn(data: SignInValidationSchema) {
    try {
      const user = await signIn({ email: data.email, senha: data.senha })
      console.log(user)

      // navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="space-y-6">
      <h1 className="text-3xl font-bold">Bem-vindo</h1>
      <p className="mt-1 text-base font-normal text-zinc-500">
        Faça login aqui
      </p>
      <div className="mt-6">
        <label htmlFor="email" className="text-base font-medium">
          E-mail
        </label>
        <Input id="email" {...register("email")} />
      </div>
      <div className="mt-3">
        <label htmlFor="senha" className="text-base font-medium">
          Senha
        </label>
        <Input id="senha" {...register("senha")} />
      </div>
      <Button className="mt-6" type='submit' disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : 'Entrar'}
      </Button>
    </form>
  )
}
