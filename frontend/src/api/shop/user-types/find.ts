import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface UserTypeBody {
  id: number;
  description: string;
}

interface UserTypeResponse {
  data: UserTypeBody[];
}

export async function findUserTypesController(id: number) {
  const response = await api.get<UserTypeResponse>(`/usertype/${id}`);

  return response.data;
}

export function findUserType(id: number) {
  return useQuery({
    queryKey: ["findUserType", id],
    queryFn: () => findUserTypesController(id),
    enabled: !!id
  })
}