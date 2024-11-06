import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

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

export async function listAddressesController() {
  const response = await api.get<AddressResponse>("/address");

  return response.data;
}

export function listAddresses() {
  return useQuery({
    queryKey: ["listAddress"],
    queryFn: listAddressesController
  })
}