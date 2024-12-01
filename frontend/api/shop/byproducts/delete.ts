import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { ByproductBody } from "./create";


interface ByproductResponse {
  status: string;
  message: string;
}

export async function deleteByproductsController(
  byproduct: Partial<ByproductBody>,
) {
  const response = await api.delete<ByproductResponse>("/byproduct", {
    data: {
      id: byproduct.id,
    },
  });

  return response.data;
}

export function deleteByproduct() {
  return useMutation({
    mutationKey: ["deleteByproduct"],
    mutationFn: deleteByproductsController,
  });
}
