import { listCategories } from "@/api/shop/categories/list"
import { Link } from "react-router-dom"

export function Categories () {
  const { data } = listCategories()

  return (
    <div className="grid grid-cols-4 w-full gap-4">
      {data?.map((category) => {
          return (
            <Link to={`/products?category=${category.id}`} className="w-full p-4 rounded-lg flex items-center justify-center bg-muted">
              <span className="font-semibold">
                {category.name}
              </span>
            </Link>
          )
        }
      )}
    </div>
  )
}
