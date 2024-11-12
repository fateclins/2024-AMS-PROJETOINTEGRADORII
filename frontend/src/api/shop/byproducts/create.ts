import { ByproductMapper } from "@/api/mappers/byproduct-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface ByproductBody {
  id: number;
  idProduct: number;
  idSubcategory: number;
}

interface ByproductResponse {
  status: string;
  message: string;
}

export async function createByproductsController(
  byproducts: Partial<ByproductBody>,
) {
  const data = ByproductMapper.toResponse(byproducts);

  const response = await api.post<ByproductResponse>("/byproduct", {
    ...data,
  });

  return response.data;
}

export function createByproduct() {
  return useMutation({
    mutationKey: ["createByproduct"],
    mutationFn: createByproductsController,
  });
}
