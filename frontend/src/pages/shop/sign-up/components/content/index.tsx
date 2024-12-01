import { createUser } from '@/api/shop/users/create'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const signUpValidationSchema = z.object({
  name: z.string(),
  identity: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type SignUpValidationSchema = z.infer<typeof signUpValidationSchema>

export function Content () {
  const { handleSubmit, register, watch } = useForm<SignUpValidationSchema>({
    resolver: zodResolver(signUpValidationSchema),
    defaultValues: {
      email: "",
      identity: "",
      name: "",
      password: "",
    }
  })

  const navigate = useNavigate();

  async function handleSignUp(data: SignUpValidationSchema) {
    try {
      const { mutateAsync: signUp } = createUser()

      await signUp({
        email: data.email,
        identity: data.identity,
        idUserType: 3,
        name: data.name,
        password: data.password,
      })

      navigate("/sign-in");
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)} className="m-auto flex w-[445px] flex-col flex-wrap">
      <h1 className="text-3xl font-bold">Criar uma conta</h1>
      <p className="mt-1 text-base font-normal text-zinc-500">
        Informe seus dados
      </p>

      <fieldset className="mt-8">
        <legend className="w-[150px] border-b-2 border-b-zinc-950 text-xl font-bold">
          Dados Pessoais
        </legend>
        <div className="mt-5 flex flex-row items-center gap-5">
          <div className="w-full">
            <label htmlFor="" className="text-base font-medium">
              Nome completo
            </label>
            <Input id="" type="text" className="mt-1" {...register("name", { required: false })} value={watch("name")}/>
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-base font-medium">
            Identidade
          </label>
          <Input id="" type="text" className="mt-1" {...register("identity", { required: false })} value={watch("identity")}/>
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-base font-medium">
            E-mail
          </label>
          <Input id="" type="email" className="mt-1" {...register("email", { required: false })} value={watch("email")}/>
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-base font-medium">
            Senha
          </label>
          <Input id="" type="text" className="mt-1" {...register("password", { required: false })} value={watch("password")}/>
        </div>
      </fieldset>

      {/* <fieldset className="mt-8">
        <legend className="w-[150px] border-b-2 border-b-zinc-950 text-xl font-bold">
          Endereço
        </legend>
        <div className="mt-5 flex flex-row items-center gap-5">
          <div className="w-full">
            <label htmlFor="" className="text-base font-medium">
              Pais
            </label>
            <Input id="" type="text" className="mt-1" {...register("country", { required: false })} value={watch("country")}/>
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-base font-medium">
              Estado
            </label>
            <Input id="" type="text" className="mt-1" {...register("state", { required: false })} value={watch("state")}/>
          </div>
        </div>

        <div className="mt-3 flex flex-row items-center gap-5">
          <div className="w-[200px]">
            <label htmlFor="" className="text-base font-medium">
              Cidade
            </label>
            <Input id="" type="text" className="mt-1" {...register("city", { required: false })} value={watch("city")}/>
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-base font-medium">
              Bairro
            </label>
            <Input id="" type="text" className="mt-1" {...register("district", { required: false })} value={watch("district")}/>
          </div>
        </div>

        <div className="mt-3 flex flex-row items-center gap-5">
          <div className="w-full">
            <label htmlFor="" className="text-base font-medium">
              Rua
            </label>
            <Input id="" type="text" className="mt-1" {...register("street", { required: false })} value={watch("street")}/>
          </div>
          <div className="w-[100px]">
            <label htmlFor="" className="text-base font-medium">
              Número
            </label>
            <Input id="" type="number" className="mt-1" {...register("number", { required: false })} value={watch("number")}/>
          </div>
        </div>
      </fieldset>

      <div className="w-full mt-3">
        <label htmlFor="" className="text-base font-medium">
          Complemento
        </label>
        <Input id="" type="text" className="mt-1" {...register("complement", { required: false })} value={watch("complement")}/>
      </div> */}

      <div className="mt-3 flex items-center">
        <Checkbox id="accept" />
        <label htmlFor="accept" className="ml-2">
          Eu aceito as <strong>Políticas de Privacidade</strong> e os{' '}
          <strong>Termos de Uso</strong>
        </label>
      </div>
      <Button className="mt-6" type='submit'>Entrar</Button>
    </form>
  )
}
