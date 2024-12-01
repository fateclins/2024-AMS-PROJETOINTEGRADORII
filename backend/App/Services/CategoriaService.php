<?php
    namespace App\Services;

    use App\Models\Categoria;

    class CategoriaService
    {
   
        public $categoria;
        
        public function __construct(){
            $this->categoria = new Categoria();
        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->categoria->pk = $id;
                $this->categoria->find($id);
                return $this->categoria->variables;
            } else {
                $input = file_get_contents('php://input');

                $data = json_decode($input, true);

                if(isset($data["random"])){
                // var_dump($data);exit;
                return $this->categoria->random();
                }
                

                if(isset($data["pagination"]) && isset($data["filter"])){
                
                    $this->categoria->pagination = $data["pagination"];
                    $this->categoria->variables = $data["filter"];
                }
                
               
                return $this->categoria->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->categoria->variables = $data;

            $this->categoria->create($data);

           
            
            return $this->categoria->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->categoria->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->categoria->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->categoria->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->categoria->delete();
        }
    }