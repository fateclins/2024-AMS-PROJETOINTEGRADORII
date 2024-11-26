import { AddressMapper } from "@/api/mappers/address-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AddressBody } from "./create";

interface AddressResponse {
  status: string;
  message: string;
}

export async function updateAddressesController(address: AddressBody) {
  const data = AddressMapper.toResponse(address);

  const response = await api.put<AddressResponse>("/address", { ...data });

  return response.data;
}

export function updateAddress() {
  return useMutation({
    mutationKey: ["updateAddress"],
    mutationFn: updateAddressesController,
  });
}
