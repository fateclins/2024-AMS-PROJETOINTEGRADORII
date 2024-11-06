import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface ByproductBody {
  id: number;
  idProduct: number;
  idSubcategory: number;
}

interface ByproductResponse {
  data: ByproductBody[];
}

export async function deleteByproductsController(
  byproduct: Partial<ByproductBody>,
) {
  const response = await api.delete<ByproductResponse>("/byproduct", {
    data: {
      id: byproduct.id,
    }
  });

  return response.data;
}

export function deleteByproduct() {
  return useMutation({
    mutationKey: ["deleteByproduct"],
    mutationFn: deleteByproductsController
  })
}