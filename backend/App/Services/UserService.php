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

            $data['senha'] = hash('sha256', $data['senha'] );
            
            $this->user->variables = $data;

            $this->user->create($data);

           
            
            return $this->user->db->lastInsertId();
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
    }