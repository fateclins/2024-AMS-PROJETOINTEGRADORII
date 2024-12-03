import { api } from "@/lib/axios";


export interface ByproductBody {
  id: number,
	idProduto: number,
  idSubCat: number,
}

export async function deleteByproductsController(
  byproduct: Partial<ByproductBody>,
) {
  const response = await api.delete("/byproduct", {
    data: {
      id: byproduct.id,
    },
  });

  return response.data;
}
