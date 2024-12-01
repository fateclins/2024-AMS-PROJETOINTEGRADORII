import { listProductsController } from "@/api/shop/products/list";
import { Bestseller } from "./components/bestseller";
import { Categories } from "./components/categories";
import { useQuery } from "@tanstack/react-query";

export function Home () {
  const { data: products } = useQuery({
    queryKey: ["listProduct"],
    queryFn: () => listProductsController({ filter: { valor: 99.99 }, pagination: {} }),
  });

  return (
    <div className="flex pb-16 flex-col items-center">
      <Categories />
      <Bestseller products={products} />
    </div>
  );
};
