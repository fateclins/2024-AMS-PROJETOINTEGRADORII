<?php
    namespace App\Services;

    use App\Models\OrderItem;

    class OrderItemService
    {

        public $orderitem;

        public function __construct(){
            $this->orderitem = new OrderItem();


        }

        public function get($id = null) 
        {
            if ($id) {
                $this->orderitem->pk = $id;
                $this->orderitem->find($id);
                return $this->orderitem->variables;
            } else {
                $req = $_REQUEST;

                $data = json_decode($req['payload'], true);

                if(isset($data["random"])){
                // var_dump($data);exit;
                return $this->orderitem->random();
                }
                

                if(isset($data["pagination"]) && isset($data["filter"])){
                
                    $this->orderitem->pagination = $data["pagination"];
                    $this->orderitem->variables = $data["filter"];
                }
                
               
                return $this->orderitem->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 

            $this->orderitem->variables = $data;

            $this->orderitem->create($data);



            return $this->orderitem->db->lastInsertId();
        }

        public function put() 
        {


            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 


            $this->orderitem->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }


            return $this->orderitem->save();

        }

        public function delete() 
        {

            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 


            $this->orderitem->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }


            return $this->orderitem->delete();
        }
    }