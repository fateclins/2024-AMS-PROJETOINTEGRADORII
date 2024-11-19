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

export async function listUserTypesController() {
  const response = await api.get<UserTypeResponse>("/usertype");

  const data = UserTypeMapper.toRequest(response.data);

  return data;
}

export function listUserTypes() {
  return useQuery({
    queryKey: ["listUserType"],
    queryFn: listUserTypesController,
  });
}
