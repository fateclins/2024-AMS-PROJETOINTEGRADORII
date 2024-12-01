<?php
    namespace App\Services;

    use App\Models\Coupon;

    class CouponService
    {

        public $coupon;
        
        public function __construct(){
            $this->coupon = new Coupon();

        }
        
        public function get($id = null) {
            if ($id) {
                $this->coupon->pk = $id;
                $this->coupon->find($id);
                return $this->coupon->variables;
            } else {
                $input = file_get_contents('php://input');

                $data = json_decode($input, true);

                if(isset($data["random"])){
                // var_dump($data);exit;
                return $this->coupon->random();
                }
                

                if(isset($data["pagination"]) && isset($data["filter"])){
                
                    $this->coupon->pagination = $data["pagination"];
                    $this->coupon->variables = $data["filter"];
                }
                
               
                return $this->coupon->search();
            }
        }

        public function post(){
            $input = file_get_contents('php://input');
            $data = json_decode($input, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            
            $this->coupon->variables = $data;
            $this->coupon->create($data);

            
            return $this->coupon->db->lastInsertId();
        }

        public function put(){
            $input = file_get_contents('php://input');
            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            

            $this->coupon->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }

            return $this->coupon->save();
        }

        public function delete(){
            
            $input = file_get_contents('php://input');
            $jsonData = json_decode($input, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Dados devem ter formato json');
            } 
            $this->coupon->variables = $jsonData;

            if (!isset($jsonData['id'])){
                throw new \Exception('Id não enviado na requisição');
            }
        
            return $this->coupon->delete();
        }
    }