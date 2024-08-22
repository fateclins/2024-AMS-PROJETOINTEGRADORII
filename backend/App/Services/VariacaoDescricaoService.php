<?php
    namespace App\Services;

    use App\Models\VariacaoDescricao;

    class VariacaoDescricaoService
    {
   
        public $variacaoDescricao;
        
        public function __construct(){
            $this->variacaoDescricao = new VariacaoDescricao();
        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->variacaoDescricao->pk = $id;
                $this->variacaoDescricao->find($id);
                return $this->variacaoDescricao->variables;
            } else {
                
                return $this->variacaoDescricao->all();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->variacaoDescricao->variables = $data;

            $this->variacaoDescricao->create($data);

           
            
            return $this->variacaoDescricao->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->variacaoDescricao->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->variacaoDescricao->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->variacaoDescricao->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->variacaoDescricao->delete();
        }
    }