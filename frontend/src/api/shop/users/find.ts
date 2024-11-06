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

export async function findUsersController(id: number) {
  const response = await api.get<UserResponse>(`/user/${id}`);

  return response.data;
}

export function findUser(id: number) {
  return useQuery({
    queryKey: ["findUser", id],
    queryFn: () => findUsersController(id),
    enabled: !!id,
  });
}
