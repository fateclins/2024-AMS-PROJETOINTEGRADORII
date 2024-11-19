import { AddressMapper } from "@/api/mappers/address-mapper";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface AddressBody {}

interface AddressResponse {}

export async function listAddressesController() {
  const response = await api.get("/user");

  const info: Array<any> = response.data;

  return info.map((item) => {
    return AddressMapper.toRequest(item);
  });
}

export function listAddresses() {
  return useQuery({
    queryKey: ["listAddress"],
    queryFn: listAddressesController,
  });
}
