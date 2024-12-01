import { Eye, ShoppingCart, Star } from '@phosphor-icons/react'

export function Bestseller () {
  return (
    <div className="mt-20 w-[1140px]">
      <h1 className="mb-9 text-left text-3xl font-medium">
        Produtos mais vendidos
      </h1>
      <main className="mt-4 flex flex-wrap justify-between">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <div key={index} className="relative mb-3 w-[262px]">
              <div className="absolute right-1 top-1 flex w-min flex-col gap-2 rounded-md bg-zinc-100 p-2">
                <Star
                  size={24}
                  weight="regular"
                  className="text-zinc-500 ease-in-out hover:cursor-pointer hover:text-zinc-950 hover:transition hover:duration-500"
                />
                <Eye
                  size={24}
                  weight="regular"
                  className="text-zinc-500 ease-in-out hover:cursor-pointer hover:text-zinc-950 hover:transition hover:duration-500"
                />
                <ShoppingCart
                  size={24}
                  weight="regular"
                  className="text-zinc-500 ease-in-out hover:cursor-pointer hover:text-zinc-950 hover:transition hover:duration-500"
                />
              </div>
              <img src="" alt="" className="h-[330px] w-auto bg-zinc-400" />
              <div className="flex flex-col pt-5">
                <strong className="truncate text-left text-sm">
                  Lorem ipsum
                </strong>
                <p className="truncate text-left text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsam omnis animi repudiandae impedit dolorem cupiditate
                  maiores hic alias. Quidem in quos placeat possimus suscipit
                  quia consequatur neque porro voluptatem accusantium.
                </p>
                <span className="text-left text-sm">R$ 600,00</span>
              </div>
            </div>
          )
        })}
      </main>
    </div>
  )
}
