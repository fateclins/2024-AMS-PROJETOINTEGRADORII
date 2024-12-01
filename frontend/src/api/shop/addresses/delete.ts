import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AddressBody } from "./create";

interface AddressResponse {
  status: string;
  message: string;
}

export async function deleteAddressesController(address: Partial<AddressBody>) {
  const response = await api.delete<AddressResponse>("/address", {
    data: {
      id: address.id,
    },
  });

  return response.data;
}

export function deleteAddress() {
  return useMutation({
    mutationKey: ["deleteAddress"],
    mutationFn: deleteAddressesController,
  });
}
