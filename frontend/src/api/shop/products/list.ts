import { ProductMapper } from "@/api/mappers/product-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface ProductBody {}

interface ProductResponse {}

export async function listProductsController() {
  const response = await api.get("/product");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return ProductMapper.toRequest(item);
  });
}

export function listProducts() {
  return useQuery({
    queryKey: ["listProduct"],
    queryFn: listProductsController,
  });
}
