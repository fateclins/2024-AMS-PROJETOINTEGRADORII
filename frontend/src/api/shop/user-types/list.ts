import { UserTypeMapper } from "@/api/mappers/user-type-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface UserTypeBody {}

interface UserTypeResponse {}

export async function listUserTypesController() {
  const response = await api.get("/usertype");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return UserTypeMapper.toRequest(item);
  });
}

export function listUserTypes() {
  return useQuery({
    queryKey: ["listUserType"],
    queryFn: listUserTypesController,
  });
}
