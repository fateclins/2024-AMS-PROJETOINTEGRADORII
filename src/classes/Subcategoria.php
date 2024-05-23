<?php

include 'Conn.php';

class Subcategoria extends Conn
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
        $query = "SELECT * FROM subcategoria";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $subcategorias = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $subcategorias;
    }

    public function create(): bool
    {
        $query = "INSERT INTO subcategoria (descricao, idCategoria) 
                  VALUES (:descricao, :idCategoria)";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($this->formData);
    }

    public function delete(int $id): bool
    {
        $query = "DELETE FROM subcategoria WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function update(int $id): bool
    {
        $query = "UPDATE subcategoria 
                  SET descricao = :descricao, idCategoria = :idCategoria 
                  WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $this->formData['id'] = $id;
        return $stmt->execute($this->formData);
    }

    public function view(int $id)
    {
        $query = "SELECT * FROM subcategoria WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
