<?php

include 'Conn.php';

class Loja extends Conn
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
        $query = "SELECT * FROM loja";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $lojas = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $lojas;
    }

    public function create(): bool
    {
        $query = "INSERT INTO loja (nome, logo, banner, qtdproduto, corfundo, corfonte, area, cnpj, idUsuario) 
                  VALUES (:nome, :logo, :banner, :qtdproduto, :corfundo, :corfonte, :area, :cnpj, :idUsuario)";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($this->formData);
    }

    public function delete(int $id): bool
    {
        $query = "DELETE FROM loja WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function update(int $id): bool
    {
        $query = "UPDATE loja 
                  SET nome = :nome, logo = :logo, banner = :banner, qtdproduto = :qtdproduto, 
                      corfundo = :corfundo, corfonte = :corfonte, area = :area, cnpj = :cnpj, 
                      idUsuario = :idUsuario 
                  WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $this->formData['id'] = $id;
        return $stmt->execute($this->formData);
    }

    public function view(int $id)
    {
        $query = "SELECT * FROM loja WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
