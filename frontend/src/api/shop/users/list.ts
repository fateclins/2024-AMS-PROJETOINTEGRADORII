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

interface UserResponse {
  data: UserBody[];
  pagination: {
    current_page: number
    per_page: number
    total_records: number
    total_pages: number
  }
}

export interface UsersParams {
  filter: {
    nome?: string | null
    valor?: number | null
  }
  pagination: {
    getStart?: number
    getLimit?: number
  }
}


export async function listUsersController({ filter, pagination }: UsersParams) {
  const response = await api.get<UserResponse>("/user", {
    params: {
      payload: JSON.stringify({
        filter: {
          keyword: {
            nome: filter.nome ?? null,
            valor: filter.valor ?? null
          }
        },
        pagination: {
          getStart: pagination.getStart ?? 0,
          getLimit: pagination.getLimit ?? 10
        }
      })
    }
  });

  return response.data
}
