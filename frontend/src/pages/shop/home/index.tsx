import { listProductsController } from "@/api/shop/products/list";
import { Bestseller } from "./components/bestseller";
import { Categories } from "./components/categories";
import { useQuery } from "@tanstack/react-query";

export function Home () {
  const { data: products } = useQuery({
    queryKey: ["listProduct"],
    queryFn: () => listProductsController({ filter: {}, pagination: {} }),
  });

  return (
    <div className="flex pb-16 flex-col items-center">
      <Categories />
      <Bestseller products={products} />
    </div>
  );
};
