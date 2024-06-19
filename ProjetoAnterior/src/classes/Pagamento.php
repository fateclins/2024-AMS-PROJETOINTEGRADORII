<?php

include 'Conn.php';

class Pagamento extends Conn
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
        $query = "SELECT * FROM pagamento";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $pagamentos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $pagamentos;
    }

    public function create(): bool
    {
        $query = "INSERT INTO pagamento (datap, valor, operacao, statusp, idPedido) 
                  VALUES (:datap, :valor, :operacao, :statusp, :idPedido)";
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($this->formData);
    }

    public function delete(int $id): bool
    {
        $query = "DELETE FROM pagamento WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function update(int $id): bool
    {
        $query = "UPDATE pagamento 
                  SET datap = :datap, valor = :valor, operacao = :operacao, statusp = :statusp, idPedido = :idPedido 
                  WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $this->formData['id'] = $id;
        return $stmt->execute($this->formData);
    }

    public function view(int $id)
    {
        $query = "SELECT * FROM pagamento WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
