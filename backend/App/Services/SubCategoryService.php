<?php
    namespace App\Services;

    use App\Models\SubCategory;

    class SubCategoryService
    {
   
        public $subCategory;
        
        public function __construct(){
            $this->subCategory = new SubCategory();


        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->subCategory->pk = $id;
                $this->subCategory->find($id);
                return $this->subCategory->variables;
            } else {
                $req = $_REQUEST;

                $data = json_decode($req['payload'], true);

                if(isset($data["random"])){
                // var_dump($data);exit;
                return $this->subCategory->random();
                }
                

                if(isset($data["pagination"]) && isset($data["filter"])){
                
                    $this->subCategory->pagination = $data["pagination"];
                    $this->subCategory->variables = $data["filter"];
                }
                
               
                return $this->subCategory->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->subCategory->variables = $data;

            $this->subCategory->create($data);

           
            
            return $this->subCategory->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->subCategory->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->subCategory->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->subCategory->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->subCategory->delete();
        }
    }