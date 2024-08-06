<?php
    namespace App\Services;

    use App\Models\VariacaoValor;

    class VariacaoValorService
    {
   
        public $variacaoValor;
        
        public function __construct(){
            $this->variacaoValor = new VariacaoValor();
        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->variacaoValor->pk = $id;
                $this->variacaoValor->find($id);
                return $this->variacaoValor->variables;
            } else {
                
                return $this->variacaoValor->all();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->variacaoValor->variables = $data;

            $this->variacaoValor->create($data);

           
            
            return $this->variacaoValor->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->variacaoValor->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->variacaoValor->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->variacaoValor->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->variacaoValor->delete();
        }
    }