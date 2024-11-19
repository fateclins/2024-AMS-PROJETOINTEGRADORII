import { UserMapper } from "@/api/mappers/user-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface UserBody {
  id: number;
  name: string;
  identity: string;
  email: string;
  password: string;
  idUserType: number;
}

interface UserResponse {
  status: string;
  message: string;
}

export async function createUsersController(user: Partial<UserBody>) {
  const data = UserMapper.toResponse(user);

  const response = await api.post<UserResponse>("/user", { ...data });

  return response.data;
}

export function createUser() {
  return useMutation({
    mutationKey: ["createUser"],
    mutationFn: createUsersController,
  });
}
