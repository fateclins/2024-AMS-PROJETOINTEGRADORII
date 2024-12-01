<?php
    namespace App\Services;

    use App\Models\Payment;

    class PaymentService
    {

        public $payment;

        public function __construct(){
            $this->payment = new Payment();


        }

        public function get($id = null) 
        {
            if ($id) {
                $this->payment->pk = $id;
                $this->payment->find($id);
                return $this->payment->variables;
            } else {
                $req = $_REQUEST;

                $data = json_decode($req['payload'], true);

                if(isset($data["random"])){
                // var_dump($data);exit;
                return $this->payment->random();
                }
                

                if(isset($data["pagination"]) && isset($data["filter"])){
                
                    $this->payment->pagination = $data["pagination"];
                    $this->payment->variables = $data["filter"];
                }
                
               
                return $this->payment->search();
            }
        }

        public function post() 
        {
            $input = file_get_contents('php://input');

            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 

            $this->payment->variables = $data;

            $this->payment->create($data);



            return $this->payment->db->lastInsertId();
        }

        public function put() 
        {


            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 


            $this->payment->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }


            return $this->payment->save();

        }

        public function delete() 
        {

            $input = file_get_contents('php://input');

            $jsonData = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 


            $this->payment->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }


            return $this->payment->delete();
        }
    }