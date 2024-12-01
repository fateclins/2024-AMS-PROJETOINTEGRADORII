<?php
    namespace App\Services;

    use App\Models\VariationDescription;

    class VariationDescriptionService
    {
   
        public $variationDescription;
        
        public function __construct(){
            $this->variationDescription = new VariationDescription();


        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->variationDescription->pk = $id;
                $this->variationDescription->find($id);
                return $this->variationDescription->variables;
            } else {
                $req = $_REQUEST;

                $data = json_decode($req['payload'], true);

                if(isset($data["random"])){
                // var_dump($data);exit;
                return $this->variationDescription->random();
                }
                

                if(isset($data["pagination"]) && isset($data["filter"])){
                
                    $this->variationDescription->pagination = $data["pagination"];
                    $this->variationDescription->variables = $data["filter"];
                }
                
               
                return $this->variationDescription->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->variationDescription->variables = $data;

            $this->variationDescription->create($data);

           
            
            return $this->variationDescription->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->variationDescription->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->variationDescription->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->variationDescription->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->variationDescription->delete();
        }
    }