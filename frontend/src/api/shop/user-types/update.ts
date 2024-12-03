import { api } from "@/lib/axios";

interface UserTypeBody {
  id: number
  descricao: string
}

export async function updateUserTypesController(
  userType: Partial<UserTypeBody>,
) {
  const response = await api.put("/usertype", {
    ...userType,
  });

  return response.data;
}
