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

export async function updateUsersController(user: Partial<UserBody>) {
  const response = await api.put("/user", { ...user });

  return response.data;
}
