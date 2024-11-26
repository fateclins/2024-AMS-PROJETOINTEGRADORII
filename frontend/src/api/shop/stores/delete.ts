import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { StoreBody } from "./create";

interface StoreResponse {
  status: string;
  message: string;
}

export async function deleteStoresController(store: Partial<StoreBody>) {
  const response = await api.delete<StoreResponse>("/store", {
    data: { id: store.id },
  });

  return response.data;
}

export function deleteStore() {
  return useMutation({
    mutationKey: ["deleteStore"],
    mutationFn: deleteStoresController,
  });
}
