import { UserMapper } from "@/api/mappers/user-mapper";
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
  status: string;
  data: UserBody[];
}

export async function listUsersController() {
  const response = await api.get<UserResponse>("/user");

  const data = UserMapper.toRequest(response.data);

  return data;
}

export function listUsers() {
  return useQuery({
    queryKey: ["listUser"],
    queryFn: listUsersController,
  });
}
