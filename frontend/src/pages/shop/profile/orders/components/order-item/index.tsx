import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface OrderItemProps {
  id: number;
  quantityOrdered: number;
  quantityServed: number;
  itemValue: number;
  idProduct: number;
}

export function OrderItem({
  id,
  idProduct,
  itemValue,
  quantityOrdered,
  quantityServed,
}: OrderItemProps) {
  return (
    <div className="flex w-full flex-row items-center justify-between border-b py-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <Badge className="bg-green-100 text-green-400">Entregue</Badge>
        </div>
        <div className="flex flex-row gap-4">
          <div className="size-16 flex-shrink-0 rounded-lg bg-muted" />
          <div className="flex flex-col">
            <h3 className="font-semibold">Lorem ipsum</h3>
            <span>Tam: P</span>
            <span>Qtde: 1</span>
          </div>
        </div>
      </div>

      <strong>R$ 142,00</strong>

      <div className="flex flex-col gap-2">
        <Button variant="outline" size="sm">
          Ver pedido
        </Button>
        <Button size="sm">Avaliar produto</Button>
      </div>
    </div>
  );
}
