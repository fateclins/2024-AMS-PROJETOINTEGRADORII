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

export async function findAddressesController(id: number) {
  const response = await api.get<AddressResponse>(`/address/${id}`);

  return response.data;
}


export function findAddress(id: number) {
  return useQuery({
    queryKey: ["findAddress", id],
    queryFn: () => findAddressesController(id),
    enabled: !!id,
  })
}