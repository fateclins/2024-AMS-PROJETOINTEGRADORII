import { api } from "@/lib/axios";

export interface UserTypeBody {
  id: number
  descricao: string
}

export async function createUserTypesController(
  userType: Partial<UserTypeBody>,
) {
  const response = await api.post("/usertype", {
    ...userType,
  });

  return response.data;
}
