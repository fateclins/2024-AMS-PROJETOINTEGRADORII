import { api } from "@/lib/axios"

export interface UserBody {
  nome: string
  imagem?: string
  identidade: string
  email: string
  senha: string
  idTipoUsuario: number
}

interface UserResponse {
  status: string;
  message: string;
}

export async function createUsersController(data: UserBody): Promise<UserResponse> {
  const response = await api.post("/user", {
    nome: data.nome,
    email: data.email,
    senha: data.senha,
    idTipoUsuario: data.idTipoUsuario,
    imagem: data.imagem
  });

  return response.data;
}
