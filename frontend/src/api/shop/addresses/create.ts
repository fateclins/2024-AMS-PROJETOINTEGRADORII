import { AddressMapper } from "@/api/mappers/address-mapper";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface AddressBody {
  id: number;
  country: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement: string;
  idUser: number;
}

interface AddressResponse {
  status: string;
  message: string;
}

export async function createAddressesController(address: Partial<AddressBody>) {
  const data = AddressMapper.toResponse(address);

  const response = await api.post<AddressResponse>("/address", { ...data });

  return response.data;
}

export function createAddress() {
  return useMutation({
    mutationKey: ["createAddress"],
    mutationFn: createAddressesController,
  });
}
