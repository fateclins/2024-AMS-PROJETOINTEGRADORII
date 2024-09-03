-- Inserts para tabela variacaoDescricao
INSERT INTO variacaoDescricao (descricao) VALUES ('Cor'), ('Tamanho'), ('Material');

-- Inserts para tabela variacaoValor
INSERT INTO variacaoValor (valor, idVariacaoDescricao) VALUES
('Azul', 1),
('Vermelho', 1),
('Verde', 1),
('P', 2),
('M', 2),
('G', 2),
('Algodão', 3),
('Poliéster', 3),
('Linho', 3);

-- Inserts para tabela tipoUsuario
INSERT INTO tipoUsuario (descricao) VALUES ('Administrador'), ('Cliente');

-- Inserts para tabela usuario
INSERT INTO usuario (nome, indentidade, email, senha, idTipoUsuario) VALUES
('Admin', '123456', 'admin@example.com', MD5('admin123'), 1),
('João', '654321', 'joao@example.com', MD5('joao123'), 2),
('Maria', '987654', 'maria@example.com', MD5('maria123'), 2);

-- Inserts para tabela endereco
INSERT INTO endereco (pais, estado, cidade, bairro, rua, numero, logradouro, idUsuario) VALUES
('Brasil', 'SP', 'São Paulo', 'Centro', 'Rua A', '123', 'Comercial', 1),
('Brasil', 'RJ', 'Rio de Janeiro', 'Copacabana', 'Rua B', '456', 'Residencial', 2);

-- Inserts para tabela loja
INSERT INTO loja (nome, logo, banner, qtdproduto, corfundo, corfonte, area, cnpj, idUsuario) VALUES
('Loja A', 'logo_a.png', 'banner_a.png', '100', '#FFFFFF', '#000000', 'Moda', '123456789', 1),
('Loja B', 'logo_b.png', 'banner_b.png', '200', '#000000', '#FFFFFF', 'Tecnologia', '987654321', 2);

-- Inserts para tabela produto
INSERT INTO produto (qtde, valor, modelo, idv1, idv2, idloja) VALUES
(10, 100.00, 'Camiseta Azul P', 1, 4, 1),
(20, 200.00, 'Calça Vermelha M', 2, 5, 1),
(30, 150.00, 'Blusa Verde G', 3, 6, 2);

-- Inserts para tabela categoria
INSERT INTO categoria (nome, descricao) VALUES ('Roupas', 'Vestuário'), ('Eletrônicos', 'Produtos eletrônicos');

-- Inserts para tabela subcategoria
INSERT INTO subcategoria (descricao, idCategoria) VALUES
('Camisetas', 1),
('Calças', 1),
('Blusas', 1),
('Celulares', 2),
('Computadores', 2);

-- Inserts para tabela subProduto
INSERT INTO subProduto (idProduto, idSubCat) VALUES
(1, 1),
(2, 2),
(3, 3);

-- Inserts para tabela itemPedido
INSERT INTO itemPedido (qtdePedida, qtdeAtendida, valorItem, idProduto) VALUES
(2, 2, 200.00, 1),
(3, 3, 450.00, 2),
(1, 1, 150.00, 3);

-- Inserts para tabela pedido
INSERT INTO pedido (valorTotal, datap, statusp, valorFinal, desconto, idUsuario) VALUES
(200.00, '2024-05-01 10:00:00', 1, 200.00, 0.00, 2),
(450.00, '2024-05-02 12:00:00', 1, 450.00, 0.00, 2),
(150.00, '2024-05-03 15:00:00', 1, 150.00, 0.00, 1);

-- Inserts para tabela pagamento
INSERT INTO pagamento (datap, valor, operacao, statusp, idPedido) VALUES
('2024-05-01 11:00:00', 200.00, 1, 1, 1),
('2024-05-02 13:00:00', 450.00, 1, 1, 2),
('2024-05-03 16:00:00', 150.00, 1, 1, 3);