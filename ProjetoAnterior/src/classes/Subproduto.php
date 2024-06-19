<?php

include 'Conn.php';

class Subproduto extends Conn
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
        $query = "SELECT * FROM subProduto";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $subProdutos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $subProdutos;
    }

    public function create(): bool
    {
        $query = "INSERT INTO subProduto (idProduto, idSubCat) 
                  VALUES (:idProduto, :idSubCat)";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($this->formData);
    }

    public function delete(int $id): bool
    {
        $query = "DELETE FROM subProduto WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function update(int $id): bool
    {
        $query = "UPDATE subProduto 
                  SET idProduto = :idProduto, idSubCat = :idSubCat 
                  WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $this->formData['id'] = $id;
        return $stmt->execute($this->formData);
    }

    public function view(int $id)
    {
        $query = "SELECT * FROM subProduto WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
