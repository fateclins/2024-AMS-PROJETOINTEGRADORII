import { StoreMapper } from "@/api/mappers/store-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface StoreBody {}

interface StoreResponse {}

export async function listStoresController() {
  const response = await api.get("/store");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return StoreMapper.toRequest(item);
  });
}

export function listStores() {
  return useQuery({
    queryKey: ["listStore"],
    queryFn: listStoresController,
  });
}
