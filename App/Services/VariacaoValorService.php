<?php
    namespace App\Services;

    use App\Models\VariationValue;

    class VariationValueService
    {
   
        public $variationValue;
        
        public function __construct(){
            $this->variationValue = new VariationValue();
        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->variationValue->pk = $id;
                $this->variationValue->find($id);
                return $this->variationValue->variables;
            } else {
                
                return $this->variationValue->all();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->variationValue->variables = $data;

            $this->variationValue->create($data);

           
            
            return $this->variationValue->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->variationValue->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->variationValue->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->variationValue->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->variationValue->delete();
        }
    }