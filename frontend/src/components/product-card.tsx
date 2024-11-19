import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: {
    id: string
    image: string
    title: string
    description: string
    price: number
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`} className="w-full max-w-xs">
      <img src={product.image} alt="" className="w-full h-80 rounded-lg object-cover" />
      <div className="flex flex-col gap-2 pt-4">
        <h2 className="truncate font-semibold">
          Product
        </h2>
        <p className="truncate text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <span className="font-semibold text-lg">R$ 600,00</span>

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