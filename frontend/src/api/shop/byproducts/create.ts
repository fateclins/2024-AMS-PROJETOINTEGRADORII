import { api } from "@/lib/axios";

export interface ByproductBody {
  id: number,
	idProduto: number,
  idSubCat: number,
}

export async function createByproductsController(
  byproducts: Partial<ByproductBody>,
) {
  const response = await api.post("/byproduct", {
    ...byproducts,
  });

  return response.data;
}
