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

interface UserResponse {}

export async function findUsersController(id: number) {
  const response = await api.get<UserBody>(`/user/${id}`);

  const data = UserMapper.toRequest(response.data);

  return data;
}

export function findUser(id: number) {
  return useQuery({
    queryKey: ["findUser", id],
    queryFn: () => findUsersController(id),
    enabled: !!id,
  });
}
