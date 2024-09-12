<?php
    namespace App\Services;

    use App\Models\ItemOrder;

    class ItemOrderService
    {
   
        public $pedido;
        
        public function __construct(){
            $this->pedido = new ItemOrder();


        }
        
        public function get($id = null) 
        {
            if ($id) {
                $this->pedido->pk = $id;
                $this->pedido->find($id);
                return $this->pedido->variables;
            } else {
                
                return $this->pedido->all();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->pedido->variables = $data;

            $this->pedido->create($data);

           
            
            return $this->pedido->db->lastInsertId();
        }

        public function put() 
        {
       
          
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->pedido->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->pedido->save();
            
        }

        public function delete() 
        {
            
            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->pedido->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        

            return $this->pedido->delete();
        }
    }
