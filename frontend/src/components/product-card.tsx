import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: {
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
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`} className="w-full">
      {/* <img src='' alt="" className="w-full h-80 rounded-lg object-cover" /> */}
      <div className="w-full bg-muted h-80 rounded-lg object-cover" />
        <div className="flex flex-col gap-2 pt-4">
          <h2 className="truncate font-semibold">
            {product.nome}
          </h2>
          <p className="truncate text-muted-foreground text-sm">
            {product.descricao}
          </p>
          <span className="font-semibold text-lg">R${product.valor}</span>

          <div className="flex items-center gap-2">
            <Button className="w-full">Adicionar ao carrinho</Button>
            <Button variant='outline'>
              <Heart className="size-4" />
            </Button>
          </div>
      </div>
    </Link>
  )
}