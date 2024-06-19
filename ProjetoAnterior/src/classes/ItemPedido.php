<?php

include 'Conn.php';

class ItemPedido extends Conn
{
    private $conn;
    public array $formData;
    public int $id;

    public function __construct()
    {
        $this->conn = $this->conectDb();
    }

    public function setFormData(array $formData)
    {
        $this->formData = $formData;
    }

    public function list(): array
    {
        $query = "SELECT * FROM itemPedido";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $itensPedido = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $itensPedido;
    }

    public function create(): bool
    {
        $query = "INSERT INTO itemPedido (qtdePedida, qtdeAtendida, valorItem, idProduto) 
                  VALUES (:qtdePedida, :qtdeAtendida, :valorItem, :idProduto)";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($this->formData);
    }

    public function delete(int $id): bool
    {
        $query = "DELETE FROM itemPedido WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function update(int $id): bool
    {
        $query = "UPDATE itemPedido 
                  SET qtdePedida = :qtdePedida, qtdeAtendida = :qtdeAtendida, 
                      valorItem = :valorItem, idProduto = :idProduto 
                  WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $this->formData['id'] = $id;
        return $stmt->execute($this->formData);
    }

    public function view(int $id)
    {
        $query = "SELECT * FROM itemPedido WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
