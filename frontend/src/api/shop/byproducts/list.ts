import { ByproductMapper } from "@/api/mappers/byproduct-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface ByproductBody {}

interface ByproductResponse {}

export async function listByproductsController() {
  const response = await api.get("/user");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return ByproductMapper.toRequest(item);
  });
}

export function listByproducts() {
  return useQuery({
    queryKey: ["listByproduct"],
    queryFn: listByproductsController,
  });
}
