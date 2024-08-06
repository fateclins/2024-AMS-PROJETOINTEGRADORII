<?php
    namespace App\Services;

    use App\Models\Loja;

    class LojaService
    {
   
        public $loja;
        
        public function __construct(){
            $this->loja = new Loja();


        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->loja->pk = $id;
                $this->loja->find($id);
                return $this->loja->variables;
            } else {
                
                return $this->loja->all();
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