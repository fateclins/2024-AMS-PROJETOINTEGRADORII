import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface UserTypeBody {
  id: number;
  description: string;
}

interface UserTypeResponse {
  data: UserTypeBody[];
}

export async function listUserTypesController() {
  const response = await api.get<UserTypeResponse>("/usertype");

  return response.data;
}

export function listUserTypes() {
  return useQuery({
    queryKey: ["listUserType"],
    queryFn: listUserTypesController
  })
}