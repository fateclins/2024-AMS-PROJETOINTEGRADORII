<?php
    namespace App\Services;

    use App\Models\Order;

    class OrderService
    {

        public $order;

        public function __construct(){
            $this->order = new Order();


        }

        public function get($id = null) 
        {
            if ($id) {
                $this->order->pk = $id;
                $this->order->find($id);
                return $this->order->variables;
            } else {
                $req = $_REQUEST;

                $data = json_decode($req['payload'], true);

                if(isset($data["random"])){
                // var_dump($data);exit;
                return $this->order->random();
                }
                

                if(isset($data["pagination"]) && isset($data["filter"])){
                
                    $this->order->pagination = $data["pagination"];
                    $this->order->variables = $data["filter"];
                }
                
               
                return $this->order->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 

            $this->order->variables = $data;

            $this->order->create($data);



            return $this->order->db->lastInsertId();
        }

        public function put() 
        {


            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 


            $this->order->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }


            return $this->order->save();

        }

        public function delete() 
        {

            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 


            $this->order->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }


            return $this->order->delete();
        }
    }