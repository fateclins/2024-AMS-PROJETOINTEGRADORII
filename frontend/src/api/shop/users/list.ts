import { UserMapper } from "@/api/mappers/user-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface UserBody {}

interface UserReesponse {}

export async function listUsersController() {
  const response = await api.get("/user");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return UserMapper.toRequest(item);
  });
}

export function listUsers() {
  return useQuery({
    queryKey: ["listUser"],
    queryFn: listUsersController,
  });
}
