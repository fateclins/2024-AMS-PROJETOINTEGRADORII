import { UserTypeMapper } from "@/api/mappers/user-type-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { UserTypeBody } from "./create";

interface UserTypeResponse {
  status: string;
  message: string;
}

export async function updateUserTypesController(
  userType: Partial<UserTypeBody>,
) {
  const data = UserTypeMapper.toResponse(userType);

  const response = await api.put<UserTypeResponse>("/usertype", {
    ...data,
  });

  return response.data;
}

export function updateUserType() {
  return useMutation({
    mutationKey: ["updateUserType"],
    mutationFn: updateUserTypesController,
  });
}
