import { api } from "@/lib/axios";
import { AddressBody } from "./create";

export async function deleteAddressesController(address: Partial<AddressBody>) {
  const response = await api.delete("/address", {
    data: {
      id: address.id,
    },
  });

  return response.data;
}
