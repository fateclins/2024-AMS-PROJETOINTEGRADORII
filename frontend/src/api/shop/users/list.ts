import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

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

export async function listUsersController() {
  const response = await api.get<UserResponse>("/user");

  return response.data;
}

export function listUsers() {
  return useQuery({
    queryKey: ["listUser"],
    queryFn: listUsersController
  })
}