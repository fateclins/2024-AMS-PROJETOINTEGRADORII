<?php
include 'Conn.php';
    class Usuario extends Conn
    {
        public object $conn;
        public array $formData;
        

        public function login($email, $senha){
            $this->conn = $this->conectDb();
            $senhaCript = md5($senha);
            // var_dump($senhaCript);
            $query = "SELECT * FROM usuario WHERE email = :email AND senha = :senha";
            $result_user = $this->conn->prepare($query);
            $result_user->bindParam(':email', $email, PDO::PARAM_STR); 
            $result_user->bindParam(':senha', $senhaCript, PDO::PARAM_STR); 

            $result_user->execute();
            
            $value = $result_user->fetch(PDO::FETCH_ASSOC);
            // var_dump($value);

            if($value){
                session_start();
                $_SESSION['id'] = $value['id'];
                $_SESSION['email'] = $value['email'];
                $_SESSION['tipo'] = $value['idTipoUsuario'];

                $response =[
                    "mensagem" => "Usario valido",
                    "tipo" => $_SESSION['tipo'],
                    'status'=> 1
                ];
                return $response;

            }else{
                $query_check_email = "SELECT * FROM usuario WHERE email = :email";
                $result_check_email = $this->conn->prepare($query_check_email);
                $result_check_email->bindParam(':email', $email, PDO::PARAM_STR); 
                $result_check_email->execute();
        
                $query_check_senha = "SELECT * FROM usuario WHERE senha = :senha";
                $result_check_senha = $this->conn->prepare($query_check_senha);
                $result_check_senha->bindParam(':senha', $senhaCript, PDO::PARAM_STR); 
                $result_check_senha->execute();

                if($result_check_email->rowCount() == 0 && $result_check_senha->rowCount() == 0) {
                    $response = [
                        "mensagem" => "ERROR: email e senha inválidos",
                        "status" => 0
                    ];
                } elseif ($result_check_email->rowCount() == 0) {
                    $response = [
                        "mensagem" => "ERROR: email inválido",
                        "status" => 0
                    ];
                } else {
                    $response = [
                        "mensagem" => "ERROR: Senha inválida",
                        "status" => 0
                    ];
                }

                return $response;
            }
        }

        public function validate(){
            session_start();
            if(isset($_SESSION['id'])){
                $json=[
                    "status" => 1,
                    "email" =>  $_SESSION['email'],
                    "tipo" => $_SESSION['tipo'],
                ];
            }else{
                
                $json=[
                    "status"  => 0,
                    "mensagem" => 'Usuario não logado'
                ]; 
            }
        

            return $json;
        }

        public function logout(){
            session_start();
            session_destroy();
            $json=[
                "status"  => 1,
                "mensagem" => 'Usuario deslogado'
            ]; 
            return $json;
        }
}