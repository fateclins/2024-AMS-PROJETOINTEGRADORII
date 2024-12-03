import { createUsersController } from '@/api/shop/users/create'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const signUpValidationSchema = z.object({
  nome: z.string(),
  indentidade: z.string(),
  email: z.string().email(),
  senha: z.string(),
})

type SignUpValidationSchema = z.infer<typeof signUpValidationSchema>

export function Content () {
  const { handleSubmit, register, formState: { isSubmitting } } = useForm<SignUpValidationSchema>({
    resolver: zodResolver(signUpValidationSchema),
  })

  const navigate = useNavigate();

  const { mutateAsync: createUserFn } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: createUsersController,
  });

  async function handleSignUp(data: SignUpValidationSchema) {
    console.log(data)

    try {
      await createUserFn({
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        indentidade: data.indentidade,
        idTipoUsuario: 3,
        imagem: ''
      })

      navigate("/sign-in")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6">
      <h1 className="text-3xl font-bold">Criar uma conta</h1>
      <p className="mt-1 text-base font-normal text-zinc-500">
        Informe seus dados
      </p>

      <div className='space-y-4'>
        <div className="w-full space-y-1">
            <label htmlFor="" className="text-base font-medium">
              Nome completo
            </label>
            <Input id="" type="text" className="mt-1" {...register("nome")} />
          </div>
        <div className="mt-3">
          <label htmlFor="" className="text-base font-medium">
            Identidade
          </label>
          <Input id="" type="text" className="mt-1" {...register("indentidade")} />
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-base font-medium">
            E-mail
          </label>
          <Input id="" type="email" className="mt-1" {...register("email")} />
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-base font-medium">
            Senha
          </label>
          <Input id="" type="text" className="mt-1" {...register("senha")} />
        </div>
      </div>

      <Button className="mt-6" type='submit' disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className='animate-spin size-4' /> : 'Registrar-se'}
      </Button>
    </form>
  )
}
