import { CategoryResponse, listCategoriesController } from "@/api/shop/categories/list"
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom"

export function Categories () {
  const { data: category } = useQuery({
    queryKey: ["listCategory"],
    queryFn: () => listCategoriesController({ filter: {}, pagination: { getStart: 0, getLimit: 4 } }),
  });

  return (
    <div className="grid grid-cols-4 w-full gap-4">
      {category && category.data?.map((category: CategoryResponse) => {
          return (
            <Link to={`/products?category=${category.id}`} className="w-full p-4 rounded-lg flex items-center justify-center bg-muted">
              <span className="font-semibold">
                {category.nome}
              </span>
            </Link>
          )
        }
      )}
    </div>
  )
}
