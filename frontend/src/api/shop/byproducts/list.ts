import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface ByproductBody {
  id: number;
  idProduct: number;
  idSubcategory: number;
}

interface ByproductResponse {
  status: string;
  data: ByproductBody[];
}

export async function listByproductsController() {
  const response = await api.get<ByproductResponse>("/byproduct");

  return response.data;
}

export function listByproducts() {
  return useQuery({
    queryKey: ["listByproduct"],
    queryFn: listByproductsController,
  });
}
