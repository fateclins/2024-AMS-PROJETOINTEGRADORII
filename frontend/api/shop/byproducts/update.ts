import { ByproductMapper } from "@/api/mappers/byproduct-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { ByproductBody } from "./create";



interface ByproductResponse {
  status: string;
  message: string;
}

export async function updateByproductsController(
  byproducts: Partial<ByproductBody>,
) {
  const data = ByproductMapper.toResponse(byproducts);

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
