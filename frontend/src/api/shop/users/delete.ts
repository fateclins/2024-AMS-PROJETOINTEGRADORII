import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface UserBody {
  id: number;
  name: string;
  identity: string;
  email: string;
  password: string;
  idUserType: number;
}

interface UserResponse {
  data: UserBody[];
}

export async function deleteUsersController(user: Partial<UserBody>) {
  const response = await api.delete<UserResponse>("/user", { data: { id: user.id } });

  return response.data;
}

export function deleteUser() {
  return useMutation({
    mutationKey: ["deleteUser"],
    mutationFn: deleteUsersController
  })
}