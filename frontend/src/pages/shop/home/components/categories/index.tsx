export function Categories () {
  return (
    <div className="grid grid-cols-4 w-full gap-4">
      <div className="w-full p-4 rounded-lg flex items-center justify-center bg-muted">
        <span className="font-semibold">
          Roupas
        </span>
      </div>
      <div className="w-full p-4 rounded-lg flex items-center justify-center bg-muted">
        <span className="font-semibold">
          Eletrônicos
        </span>
      </div>
      <div className="w-full p-4 rounded-lg flex items-center justify-center bg-muted">
        <span className="font-semibold">
          Esportes
        </span>
      </div>
      <div className="w-full p-4 rounded-lg flex items-center justify-center bg-muted">
        <span className="font-semibold">
          Outros
        </span>
      </div>
    </div>
  )
}
