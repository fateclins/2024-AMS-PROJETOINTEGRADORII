import { listProducts } from "@/api/shop/products/list";
import { Bestseller } from "./components/bestseller";
import { Categories } from "./components/categories";

export function Home () {
  const { data: products } = listProducts()

  return (
    <div className="flex pb-16 flex-col items-center">
      <Categories />
      <Bestseller products={products} />
    </div>
  );
};
