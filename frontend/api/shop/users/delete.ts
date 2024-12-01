import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { UserBody } from "./create";

interface UserResponse {
  status: string;
  message: string;
}

export async function deleteUsersController(user: Partial<UserBody>) {
  const response = await api.delete<UserResponse>("/user", {
    data: { id: user.id },
  });

  return response.data;
}

export function deleteUser() {
  return useMutation({
    mutationKey: ["deleteUser"],
    mutationFn: deleteUsersController,
  });
}
