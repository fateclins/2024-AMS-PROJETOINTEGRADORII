import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface Product {
  product: {
    id: number;
    quantity: number;
    value: number;
    name: string;
    description: string;
    model: string;
    bestsellerProduct: boolean;
    idv1: number;
    idv2: number;
    idStore: number;
  }
}

export function ProductCard({ product }: Product) {
  return (
    <Link to={`/products/${product.id}`} className="w-full">
      {/* <img src='' alt="" className="w-full h-80 rounded-lg object-cover" /> */}
      <div className="w-full bg-muted h-80 rounded-lg object-cover" />
      <div className="flex flex-col gap-2 pt-4">
        <h2 className="truncate font-semibold">
         {product.name}
        </h2>
        <p className="truncate text-muted-foreground text-sm">
          {product.description}
        </p>
        <span className="font-semibold text-lg">R${product.value}</span>

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