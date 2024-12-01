<?php
    namespace App\Services;

    use App\Models\Store;

    class StoreService
    {
   
        public $loja;
        
        public function __construct(){
            $this->loja = new Store();


        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->loja->pk = $id;
                $this->loja->find($id);
                return $this->loja->variables;
            } else {
                $req = $_REQUEST;

                $data = json_decode($req['payload'], true);

                if(isset($data["random"])){
                // var_dump($data);exit;
                return $this->loja->random();
                }
                

                if(isset($data["pagination"]) && isset($data["filter"])){
                
                    $this->loja->pagination = $data["pagination"];
                    $this->loja->variables = $data["filter"];
                }
                
               
                return $this->loja->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->loja->variables = $data;

            $this->loja->create($data);

           
            
            return $this->loja->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->loja->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->loja->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->loja->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->loja->delete();
        }
    }
