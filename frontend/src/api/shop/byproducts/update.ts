import { api } from "@/lib/axios";

export interface ByproductBody {
  id: number,
	idProduto: number,
  idSubCat: number,
}

export async function updateByproductsController(
  byproducts: Partial<ByproductBody>,
) {
  const response = await api.put("/byproduct", {
    ...byproducts,
  });

  return response.data;
}
