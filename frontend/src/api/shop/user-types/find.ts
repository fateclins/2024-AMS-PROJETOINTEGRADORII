import { UserTypeMapper } from "@/api/mappers/user-type-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface UserTypeBody {
  id: number;
  description: string;
}

interface UserTypeResponse {
  status: string;
  data: UserTypeBody[];
}

export async function findUserTypesController(id: number) {
  const response = await api.get<UserTypeBody>(`/usertype/${id}`);

  const data = UserTypeMapper.toRequest(response.data);

  return data;
}

export function findUserType(id: number) {
  return useQuery({
    queryKey: ["findUserType", id],
    queryFn: () => findUserTypesController(id),
    enabled: !!id,
  });
}
