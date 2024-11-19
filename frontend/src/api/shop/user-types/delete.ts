import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface UserTypeBody {
  id: number;
  description: string;
}

interface UserTypeResponse {
  status: string;
  message: string;
}

export async function deleteUserTypesController(
  userType: Partial<UserTypeBody>,
) {
  const response = await api.delete<UserTypeResponse>("/usertype", {
    data: { id: userType.id },
  });

  return response.data;
}

export function deleteUserType() {
  return useMutation({
    mutationKey: ["deleteUserType"],
    mutationFn: deleteUserTypesController,
  });
}
