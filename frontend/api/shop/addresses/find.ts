import { AddressMapper } from "@/api/mappers/address-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface AddressBody {}

interface AddressResponse {}

export async function findAddressesController(id: number) {
  const response = await api.get(`/address/${id}`);

  const data = AddressMapper.toRequest(response.data);

  return data;
}

export function findAddress(id: number) {
  return useQuery({
    queryKey: ["findAddress", id],
    queryFn: () => findAddressesController(id),
    enabled: !!id,
  });
}
