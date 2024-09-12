<?php
    namespace App\Services;

    use App\Models\Endereco;

    class EnderecoService
    {
   
        public $endereco;
        
        public function __construct(){
            $this->endereco = new Endereco();
        }
        
        /*
        public function get($id = null) 
        {
            if ($id) {
                $this->endereco->pk = $id;
                $this->endereco->find($id);
                return $this->endereco->variables;
            } else {

                $input = file_get_contents('php://input');

                $data = json_decode($input, true);

                $this->endereco->pagination = $data["pagination"];
                $this->endereco->variables = $data["filter"];

                return $this->endereco->search();
            }
        }
        */
        public function get($id = null) 
        {

            if ($id) {
                $this->endereco->pk = $id;
                $this->endereco->find($id);
                return $this->endereco->variables;
            } else {

                $input = file_get_contents('php://input');
                $data = json_decode($input, true);

                if (is_null($data)) {
                    $data = [];
                }

                $this->endereco->pagination = $data["pagination"] ?? null;
                $this->endereco->variables = $data["filter"] ?? [];

                return $this->endereco->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->endereco->variables = $data;

            $this->endereco->create($data);

           
            
            return $this->endereco->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->endereco->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->endereco->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->endereco->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->endereco->delete();
        }
    }