import { Categories } from "./components/categories";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/product-card";
import { listProductsController, Product } from "@/api/shop/products/list";
import { Pagination } from "@/components/pagination";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
 
  const pageIndex = z.coerce
  .number()
  .transform((page) => page - 1)
  .parse(searchParams.get("page") ?? "1")

  const { data: products } = useQuery({
    queryKey: ["listProduct", pageIndex],
    queryFn: () => listProductsController({ filter: {}, pagination: { getStart: pageIndex } }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set("page", (pageIndex + 1).toString());
      
      return state;
    })
  }

  return (
    <div className="flex gap-4 pb-16 flex-col items-center">
      <Categories />
        
      <div className="space-y-4 w-full">
        <h1 className="text-left text-2xl font-semibold">
          Produtos
        </h1>

        <div className="grid grid-cols-4 gap-6">
          {products && products.data.map((product: Product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>

        {products && (          
          <Pagination
            onPageChange={handlePaginate}
            pageIndex={products.pagination.current_page}
            totalCount={products.pagination.total_records}
            perPage={products.pagination.per_page}
          />
        )}
      </div>
    </div>
  );
};
