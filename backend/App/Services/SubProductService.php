<?php
    namespace App\Services;

    use App\Models\SubProduct;

    class SubProductService
    {
   
        public $subproduct;
        
        public function __construct(){
            $this->subproduct = new SubProduct();


        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->subproduct->pk = $id;
                $this->subproduct->find($id);
                return $this->subproduct->variables;
            } else {
                $input = file_get_contents('php://input');

                $data = json_decode($input, true);

                if (is_null($data)) {
                    $data = [];
                }

                $this->subproduct->pagination = $data["pagination"] ?? null;
                $this->subproduct->variables = $data["filter"] ?? [];
               
                return $this->subproduct->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->subproduct->variables = $data;

            $this->subproduct->create($data);

           
            
            return $this->subproduct->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->subproduct->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->subproduct->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->subproduct->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->subproduct->delete();
        }
    }