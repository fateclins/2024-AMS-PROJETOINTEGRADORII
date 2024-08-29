<?php
    namespace App\Services;

    use App\Models\User;

    class UserService
    {
   
        public $user;
        
        public function __construct(){
            $this->user = new User();


        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->user->pk = $id;
                $this->user->find($id);
                return $this->user->variables;
            } else {
                
                return $this->user->all();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 

            // Verifique a ação e chame o método apropriado
            if (isset($data['action'])) {
                if ($data['action'] === 'login') {
                    unset($data['action']); // Remove o campo 'action' antes de tentar salvar
                    return $this->login($data);
                } elseif ($data['action'] === 'register') {
                    unset($data['action']); // Remove o campo 'action' antes de tentar salvar
                    return $this->register($data);
                } else {
                    throw new \Exception('Ação desconhecida');
                }
            } else {
                throw new \Exception('Ação não especificada');
            }
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->user->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->user->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->user->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->user->delete();
        }

        public function login($data)
        {
            $email = $data['email'];
            $senha = $data['senha'];

            $senhaHash = hash('sha256', $senha );

            // Defina os campos e o valor para a busca
            $fields = $email;

            // Chame a função search para buscar o usuário
            $result = $this->user->findByEmail($fields);

            // Verifica se algum usuário foi encontrado
            if ($result && !empty($result)) {
                $user = $result;

                // Comparação direta da senha
                if ($senhaHash === $user['senha']) {
                    
                    return ['message' => 'Login realizado com sucesso!', 'user_id' => $user['id']];
                } else {
                    return ['message' => 'Email ou senha inválidos'];
                }
            } else {
                return ['message' => 'Email ou senha inválidos'];
            }
        }


        private function register($data)
        {
            $data['senha'] = hash('sha256', $data['senha'] );
            $this->user->variables = $data;
            $this->user->create($data);
            
            return $this->user->db->lastInsertId();
        }
    }