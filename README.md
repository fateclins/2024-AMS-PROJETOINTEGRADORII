# Fatec - Projeto Integrador II

### RF (Requisitos funcionais)

### Dashboard

- [ ] Deve ser possível se autenticar
- [ ] Deve ser possível o usuário redefinir a senha

- [ ] Deve ser possível buscar por um produto
- [ ] Deve ser possível buscar por uma loja
- [ ] Deve ser possível listar todos os produtos de uma loja
- [ ] Deve ser possível filtrar por produtos (nome, categoria, preço)
- [ ] Deve ser possível o cliente adicionar produtos ao carrinho
- [ ] Deve ser possível o cliente fazer um pedido
- [ ] Deve ser possível importar produtos por arquivo CSV

### Marketplace

- [ ] Deve ser possível se cadastrar como lojista
- [ ] Deve ser possível um lojista cadastrar uma loja
- [ ] Deve ser possível um lojista cadastrar produtos para uma loja
- [ ] Deve ser possível um lojista cadastrar categoria de produtos em uma loja
- [ ] Deve ser possível um lojista cadastrar uma variação de produtos em uma loja
- [ ] Deve ser possível um lojista cadastrar produtos em destaque

### RN (Regras de negócio)

- [ ] Um usuário não pode ter e-mail duplicado
- [ ] Um lojista pode ter uma ou mais lojas cadastradas
- [ ] Um produto pode ter no máximo até 2 variações
- [ ] Uma loja pode ter no máximo 20 produtos em destaque
- [ ] Um pedido podera ter os seguintes status:
    - Em processo
    - Em entrega
    - Entregue
    - Cancelado
- [ ] Um pedido só pode ser cancelado se estiver com o status: Em processo

### RNF (Requisitos não-funcionais)

- [ ] Autenticação por JWT (JSON Web Token) ou OAuth 2.0
- [ ] Os campos devem ser validados;
- [ ] O campo de senha não deve conter os seguintes caracteres: ("\", "_", "/", ".")
- [ ] A senha do usuário deve ser salva criptografada;
- [ ] Um link para redefinir a senha é enviado ao e-mail do usuário;
- [ ] Os dados da aplicação precisam estar persistidos em um banco de dados MySQL;

### Layout da aplicação

https://www.figma.com/file/qN74qywR1q4fkZqcXaIasd/Ecommerce?type=design&node-id=0-1&mode=design&t=CsDeRJBCUJDqj0Nb-0
