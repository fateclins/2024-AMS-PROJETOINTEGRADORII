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
  data: AddressBody[];
}

export async function createAddressesController(address: Partial<AddressBody>) {
  const data = AddressMapper.toHTTP(address);

  const response = await api.post<AddressResponse>("/address", { ...data });

  return response.data;
}

export function createAddress() {
  return useMutation({
    mutationKey: ["createAddress"],
    mutationFn: createAddressesController
  })
}
