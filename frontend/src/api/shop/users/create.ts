
import { api } from "@/lib/axios";

export interface UserBody {
  id: number
  nome: string
  imagem: string
  indentidade: string
  email: string
  senha: string
  idTipoUsuario: number
}

export async function createUsersController(user: Partial<UserBody>) {
  const response = await api.post("/user", { ...user });

  return response.data;
}
