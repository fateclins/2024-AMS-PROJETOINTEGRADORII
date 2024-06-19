<?php

include 'Conn.php';

class Pedido extends Conn
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
        $query = "SELECT * FROM pedido";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $pedidos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $pedidos;
    }

    public function create(): bool
    {
        $query = "INSERT INTO pedido (valorTotal, datap, statusp, valorFinal, desconto, idUsuario) 
                  VALUES (:valorTotal, :datap, :statusp, :valorFinal, :desconto, :idUsuario)";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($this->formData);
    }

    public function delete(int $id): bool
    {
        $query = "DELETE FROM pedido WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function update(int $id): bool
    {
        $query = "UPDATE pedido 
                  SET valorTotal = :valorTotal, datap = :datap, statusp = :statusp, 
                      valorFinal = :valorFinal, desconto = :desconto, idUsuario = :idUsuario 
                  WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $this->formData['id'] = $id;
        return $stmt->execute($this->formData);
    }

    public function view(int $id)
    {
        $query = "SELECT * FROM pedido WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
