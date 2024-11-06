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

export async function findByproductsController(id: number) {
  const response = await api.get<ByproductResponse>(`/byproduct/${id}`);

  return response.data;
}

export function findByproduct(id: number) {
  return useQuery({
    queryKey: ["findByproduct", id],
    queryFn: () => findByproductsController(id),
    enabled: !!id,
  });
}
