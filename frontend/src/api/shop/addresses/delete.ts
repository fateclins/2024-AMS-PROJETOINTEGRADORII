import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface AddressBody {
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

export async function deleteAddressesController(address: Partial<AddressBody>) {
  const response = await api.delete<AddressResponse>("/address", {
    data: {
      id: address.id
    },
  });

  return response.data;
}

export function deleteAddress() {
  return useMutation({
    mutationKey: ["deleteAddress"],
    mutationFn: deleteAddressesController
  })
}