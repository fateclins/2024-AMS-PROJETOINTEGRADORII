<?php
    namespace App\Services;

    use App\Models\VariationValue;

    class VariationValueService
    {
   
        public $variationValueService;
        
        public function __construct(){
            $this->variationValueService = new VariationValue();


        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->variationValueService->pk = $id;
                $this->variationValueService->find($id);
                return $this->variationValueService->variables;
            } else {
                $input = file_get_contents('php://input');

                $data = json_decode($input, true);

                if(isset($data["random"])){
                // var_dump($data);exit;
                return $this->variationValueService->random();
                }
                

                if(isset($data["pagination"]) && isset($data["filter"])){
                
                    $this->variationValueService->pagination = $data["pagination"];
                    $this->variationValueService->variables = $data["filter"];
                }
                
               
                return $this->variationValueService->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->variationValueService->variables = $data;

            $this->variationValueService->create($data);

           
            
            return $this->variationValueService->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->variationValueService->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->variationValueService->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->variationValueService->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->variationValueService->delete();
        }
    }