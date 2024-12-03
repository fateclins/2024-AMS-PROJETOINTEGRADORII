import { api } from "@/lib/axios";

interface UserTypeBody {
  id: number
  descricao: string
}

export async function deleteUserTypesController(
  userType: Partial<UserTypeBody>,
) {
  const response = await api.delete("/usertype", {
    data: { id: userType.id },
  });

  return response.data;
}

