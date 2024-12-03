import { api } from "@/lib/axios";

export interface ProductBody {
  id: number
  qtde: number
  valor: number
  modelo: string
  descricao: string
  nome: string
  imagem: string
  produtoDestaque: number
  idv1: number
  idv2: number
  idloja: number
}

export async function createProductsController(product: Partial<ProductBody>) {
  const response = await api.post("/product", { ...product });

  return response.data;
}
