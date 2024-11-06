import { ByproductMapper } from "@/api/mappers/byproduct-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface ByproductBody {
  id: number;
  idProduct: number;
  idSubcategory: number;
}

interface ByproductResponse {
  data: ByproductBody[];
}

export async function createByproductsController(
  byproducts: Partial<ByproductBody>,
) {
  const data = ByproductMapper.toHTTP(byproducts)

  const response = await api.post<ByproductResponse>("/byproduct", {
    ...data,
  });

  return response.data;
}

export function createByproduct() {
  return useMutation({
    mutationKey: ["createByproduct"],
    mutationFn: createByproductsController
  })
}