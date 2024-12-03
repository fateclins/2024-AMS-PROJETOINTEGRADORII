import { api } from "@/lib/axios";
interface ProductBody {
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

export async function updateProductsController(product: Partial<ProductBody>) {
  const response = await api.put("/product", { ...product });

  return response.data;
}
