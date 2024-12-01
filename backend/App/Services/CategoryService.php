<?php
    namespace App\Services;

    use App\Models\Category;

    class CategoryService
    {
   
        public $category;
        
        public function __construct(){
            $this->category = new Category();


        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->category->pk = $id;
                $this->category->find($id);
                return $this->category->variables;
            } else {
                $req = $_REQUEST;

                $data = json_decode($req['payload'], true);

                if(isset($data["random"])){
                // var_dump($data);exit;
                return $this->category->random();
                }
                

                if(isset($data["pagination"]) && isset($data["filter"])){
                
                    $this->category->pagination = $data["pagination"];
                    $this->category->variables = $data["filter"];
                }
                
               
                return $this->category->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->category->variables = $data;

            $this->category->create($data);

           
            
            return $this->category->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->category->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->category->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->category->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->category->delete();
        }
    }