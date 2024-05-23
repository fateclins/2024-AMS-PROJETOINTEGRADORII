<?php

include 'Conn.php';

class Endereco extends Conn
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
        $query = "SELECT * FROM endereco";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $enderecos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $enderecos;
    }

    public function create(): bool
    {
        $query = "INSERT INTO endereco (pais, estado, cidade, bairro, rua, numero, logradouro, idUsuario) 
                  VALUES (:pais, :estado, :cidade, :bairro, :rua, :numero, :logradouro, :idUsuario)";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($this->formData);
    }

    public function delete(int $id): bool
    {
        $query = "DELETE FROM endereco WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function update(int $id): bool
    {
        $query = "UPDATE endereco 
                  SET pais = :pais, estado = :estado, cidade = :cidade, bairro = :bairro, 
                      rua = :rua, numero = :numero, logradouro = :logradouro, idUsuario = :idUsuario 
                  WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $this->formData['id'] = $id;
        return $stmt->execute($this->formData);
    }

    public function view(int $id)
    {
        $query = "SELECT * FROM endereco WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
