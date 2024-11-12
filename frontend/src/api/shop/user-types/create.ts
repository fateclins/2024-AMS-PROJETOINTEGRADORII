import { UserTypeMapper } from "@/api/mappers/user-type-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface UserTypeBody {
  id: number;
  description: string;
}

interface UserTypeResponse {
  status: string;
  message: string;
}

export async function createUserTypesController(
  userType: Partial<UserTypeBody>,
) {
  const data = UserTypeMapper.toResponse(userType);

  const response = await api.post<UserTypeResponse>("/usertype", {
    ...data,
  });

  return response.data;
}

export function createUserType() {
  return useMutation({
    mutationKey: ["createUserType"],
    mutationFn: createUserTypesController,
  });
}
