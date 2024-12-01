<?php
    namespace App\Services;

    use App\Models\TypeUser;

    class TypeUserService
    {
   
        public $typeUser;
        
        public function __construct(){
            $this->typeUser = new TypeUser();


        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->typeUser->pk = $id;
                $this->typeUser->find($id);
                return $this->typeUser->variables;
            } else {
                $req = $_REQUEST;

                $data = json_decode($req['payload'], true);

                if(isset($data["random"])){
                // var_dump($data);exit;
                return $this->typeUser->random();
                }
                

                if(isset($data["pagination"]) && isset($data["filter"])){
                
                    $this->typeUser->pagination = $data["pagination"];
                    $this->typeUser->variables = $data["filter"];
                }
                
               
                return $this->typeUser->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->typeUser->variables = $data;

            $this->typeUser->create($data);

           
            
            return $this->typeUser->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->typeUser->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->typeUser->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->typeUser->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->typeUser->delete();
        }
    }