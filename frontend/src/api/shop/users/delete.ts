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

export async function deleteUsersController(user: Partial<UserBody>) {
  const response = await api.delete("/user", {
    data: { id: user.id },
  });

  return response.data;
}
