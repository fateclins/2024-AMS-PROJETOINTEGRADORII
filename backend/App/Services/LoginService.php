<?php
    namespace App\Services;
    
    use App\Models\User;

    class LoginService
    {

        public $user;

        public $key = 'sistemaTray@123';
        
        public function __construct(){
            $this->user = new User();
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->user->variables = $data;

            $email = $data['email'];
            $senha = $data['senha'];

            $senhaHash = hash('sha256', $senha);

            // Defina os campos e o valor para a busca
            $fields = $email;

            // Chame a função search para buscar o usuário
            $result = $this->user->findByEmail($fields);

            // Verifica se algum usuário foi encontrado
            if ($result && !empty($result)) {
                $user = $result;
            

                // Comparação direta da senha
                if ($senhaHash === $user['senha']) {
                    return array('access_token' => "", 'user_id' => $user['id']);
                } else {
                    return array('errors' => ['message' => 'Email ou senha inválidos']);
                }
            } else {
                return ['message' => 'Email ou senha inválidos'];
            }
        }
    }