import { UserTypeMapper } from "@/api/mappers/user-type-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface UserTypeBody {}

interface UserTypeResponse {}

export async function findUserTypesController(id: number) {
  const response = await api.get(`/usertype/${id}`);

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
