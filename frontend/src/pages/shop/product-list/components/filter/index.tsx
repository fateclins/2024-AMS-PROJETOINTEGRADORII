import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Filter () {
  return (
    <Accordion type="multiple" className="w-full p-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">
          Categorias de Produto
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center">
            <Checkbox id="test" />
            <label htmlFor="test" className="ml-3 font-medium">
              Eletrônico
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="hover:no-underline">
          Filtrar por preço
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 p-2">
            <Label htmlFor='price'>Preço: $0 - R$5000</Label>
            <Input id='price' placeholder='Digite o preço do produto' />
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-3">
        <AccordionTrigger className="hover:no-underline">
          Filtrar por cor
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center">
              <Checkbox
                id="test1"
                className="border-red-500 bg-red-500 checked:bg-red-500"
              />
              <label htmlFor="test1" className="ml-3 font-medium">
                Red
              </label>
            </div>
            <div className="flex flex-row">
              <span className="">(10)</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="hover:no-underline">
          Filtrar por tamanho
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center">
              <Checkbox
                id="test2"
                className="border-red-500 bg-red-500 text-white"
              />
              <label htmlFor="test2" className="ml-3 font-medium">
                Red
              </label>
            </div>
            <div className="flex flex-row">
              <span className="">(10)</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  )
}
