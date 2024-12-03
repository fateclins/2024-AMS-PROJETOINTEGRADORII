import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { Loader2 } from "lucide-react"
import { api } from "@/lib/axios"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

const signInValidationSchema = z.object({
  email: z.string().email(),
  senha: z.string(),
})

type SignInValidationSchema = z.infer<typeof signInValidationSchema>

interface SignInBody {
  email: string
  senha: string
}

interface SignInResponse {
  message: string
  token: string
  user: {
    id: number
    nome: string
    email: string
    senha: string
    indentidade: string
    imagem: string
    idTipoUsuario: number
  }
}

async function signIn({ email, senha }: SignInBody): Promise<SignInResponse> {
  const response = await api.post('/login', {
    email,
    senha
  })

  // console.log(response.data)

  return response.data
}

export function Content () {
  const navigate = useNavigate()

  const { handleSubmit, register, formState: { isSubmitting } } = useForm<SignInValidationSchema>({
    resolver: zodResolver(signInValidationSchema),
  })

  async function handleSignIn(data: SignInValidationSchema) {
    try {
      const result = await signIn({ email: data.email, senha: data.senha })

      console.log(result)

      if (result) {
        localStorage.setItem('token', result.token)
        localStorage.setItem('nome', result.user.nome)
        localStorage.setItem('email', result.user.email)
        localStorage.setItem('imagem', result.user.imagem)
        localStorage.setItem('idUsuario', String(result.user.id))
      }

      navigate('/')
    } catch (err) {
      console.log(err)
      toast.error('Ops, ocorreu um erro ao tentar fazer login.')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col gap-4">
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
      <Button className="w-full" type='submit' disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : 'Entrar'}
      </Button>
      <Link to="/sign-up" className="underline text-sm">Registrar-se</Link>
    </form>
  )
}
