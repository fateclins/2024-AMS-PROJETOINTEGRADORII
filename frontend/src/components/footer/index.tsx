import {
  FacebookLogo,
  InstagramLogo, TwitterLogo
} from '@phosphor-icons/react'


export function Footer() {
  return (
    <div className="flex w-full mt-4 text-muted-foreground p-4 items-center justify-between border-t">
      <div className="text-xs">
        2024 Projeto Integrador | Fatec - &#9400;Todos os direitos reservados
      </div>
      <div className="flex gap-3">
        <FacebookLogo size={20} weight="regular" />
        <InstagramLogo size={20} weight="regular" />
        <TwitterLogo size={20} weight="regular" />
      </div>
    </div>
  )
}
