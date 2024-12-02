import { UserMapper } from "@/api/mappers/user-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { UserBody } from "./create";

interface UserResponse {
  status: string;
  message: string;
}

export async function updateUsersController(user: Partial<UserBody>) {
  const data = UserMapper.toResponse(user);

  const response = await api.put<UserResponse>("/user", { ...data });

  return response.data;
}

export function updateUser() {
  return useMutation({
    mutationKey: ["updateUser"],
    mutationFn: updateUsersController,
  });
}