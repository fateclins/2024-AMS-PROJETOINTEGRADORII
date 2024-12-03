import { api } from "@/lib/axios";

export interface ProductBody {
  id: number
  qtde: number
  valor: number
  modelo: string
  descricao: string
  nome: string
  produtoDestaque: number
  idv1: number
  idv2: number
  idloja: number
}

export async function deleteProductsController(product: Partial<ProductBody>) {
  const response = await api.delete("/product", {
    data: { id: product.id },
  });

  return response.data;
}