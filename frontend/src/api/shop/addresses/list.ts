import { AddressMapper } from "@/api/mappers/address-mapper";
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
  status: string;
  data: AddressBody[];
}

export async function listAddressesController() {
  const response = await api.get<AddressResponse>("/address");

  const data = AddressMapper.toRequest(response.data);

  return data;
}

export function listAddresses() {
  return useQuery({
    queryKey: ["listAddress"],
    queryFn: listAddressesController,
  });
}
