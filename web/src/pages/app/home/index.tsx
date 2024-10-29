import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="relative overflow-hidden h-screen bg-zinc-900 p-8 flex items-center w-full mx-auto">
      
      {/* Gradiente */}
      <div className="absolute -bottom-[600px] left-[50%] -translate-x-[50%] bg-[#216CC2] 
      w-[1200px] h-[800px] rounded-full blur-3xl opacity-55 " />

      <div className='max-w-[1024px] mx-auto w-full'>
          <div className='flex items-start justify-center w-full'>
            <div className="max-w-md text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Transforme Seu Negócio 
                <br />
              com um E-commerce de Sucesso.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              Amplie suas vendas e alcance clientes em qualquer lugar com uma loja virtual eficiente e segura. 
              Nós criamos soluções personalizadas de e-commerce para impulsionar o crescimento da sua marca.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  to="/login"                  
                  className="grid grid-flow-col auto-cols-max rounded-md bg-white px-10 py-2.5 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Login
                    
                </Link>                

                <Link
                  to="/register"                  
                  className="px-10 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-zinc-800 border border-white rounded-md"
                >
                  Cadastrar-se
                </Link>  


              </div>
            </div>
            <img
                alt="Firsttech"
                src="/logo-no-bg.png"
                className="w-[57rem] h-80"
              />
          </div>
      </div>
    </div>
  )
}
