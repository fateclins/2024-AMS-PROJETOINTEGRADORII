import { ByproductMapper } from "@/api/mappers/byproduct-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface ByproductBody {
  id: number;
  idProduct: number;
  idSubcategory: number;
}

interface ByproductResponse {
  status: string;
  message: string;
}

export async function updateByproductsController(
  byproducts: Partial<ByproductBody>,
) {
  const data = ByproductMapper.toHTTP(byproducts);

  const response = await api.put<ByproductResponse>("/byproduct", {
    ...data,
  });

  return response.data;
}

export function updateByproduct() {
  return useMutation({
    mutationKey: ["updateByproduct"],
    mutationFn: updateByproductsController,
  });
}
