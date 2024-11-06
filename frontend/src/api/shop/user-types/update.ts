import { UserTypeMapper } from "@/api/mappers/user-type-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface UserTypeBody {
  id: number;
  description: string;
}

interface UserTypeResponse {
  data: UserTypeBody[];
}

export async function updateUserTypesController(
  userType: Partial<UserTypeBody>,
) {
  const data = UserTypeMapper.toHTTP(userType)

  const response = await api.put<UserTypeResponse>("/usertype", {
    ...data,
  });

  return response.data;
}

export function updateUserType() {
  return useMutation({
    mutationKey: ["updateUserType"],
    mutationFn: updateUserTypesController
  })
}