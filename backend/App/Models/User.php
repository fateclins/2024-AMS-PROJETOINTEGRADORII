<?php
       namespace App\Models;

       use App\Models\Crud;
       use App\Models\Core;

       
        use Firebase\JWT\JWT;
        use Firebase\JWT\Key;

        define('JWT_SECRET_KEY', 'projeto_ams_p1234');
   
       class User extends Crud
       {
           protected $core = null;
           public $table = 'usuario';
           private $filters = null;
           protected $pk  = 'id';
           public $db;
          
   
           public function __construct(){
               $this->db = new Core();
           }

        public function generateJwtToken($userId, $email){
            $payload = [
                'iss' => 'http://seu-sistema.com', // Emissor do token
                'aud' => 'http://seu-sistema.com', // Destinatário do token
                'iat' => time(),                   // Hora de emissão
                'exp' => time() + 3600,            // Expiração (1 hora)
                'data' => [
                    'userId' => $userId,
                    'email' => $email
                ]
            ];
        
            // Gera o token
            $jwt = JWT::encode($payload, JWT_SECRET_KEY, 'HS256');
            return $jwt;
        }
        
        public function validateJwtToken($token){
            try {
                // Decodifica o token
                $decoded = JWT::decode($token, new Key(JWT_SECRET_KEY, 'HS256'));
        
                // Retorna os dados do token se válido
                return (array) $decoded->data;
            } catch (\Exception $e) {
                // Token inválido ou expirado
                return null;
            }
        }
        
        public function protectRoute(){
             // Obtém o token do cabeçalho Authorization
             $headers = getallheaders();
             if (!isset($headers['Authorization'])) {
                 http_response_code(401);
                 echo json_encode(['error' => 'Token não fornecido']);
                 exit;
             }
         
             // Extrai o token do cabeçalho
             $token = str_replace('Bearer ', '', $headers['Authorization']);
             $userData = $this->validateJwtToken($token);
         
             if (!$userData) {
                 http_response_code(401);
                 echo json_encode(['error' => 'Token inválido ou expirado']);
                 exit;
             }
         
             // Retorna os dados do usuário autenticado
             return $userData;
        }

        public function findUserByEmailAndPassword($email, $hashedPassword)
        {
            // SQL para buscar usuário pelo email e senha
            $sql = "SELECT * FROM " . $this->table . " WHERE email = :email AND senha = :senha LIMIT 1";


            $dados= $this->db->query($sql, ["email"=>$email, "senha"=>$hashedPassword]);
        
            
            
            return $dados;
        }
           

       }   
