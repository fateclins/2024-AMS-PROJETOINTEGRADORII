<?php
    namespace App\Services;

    use App\Models\User;

    class UserService
    {
        
        public function get($id = null) 
        {
            // return "teste";
            // echo "teste123";exit;
            if ($id) {
                return User::select($id);
            } else {
                return User::selectAll();
            }
        }

        public function post() 
        {
            $data = $_POST;

            // return User::insert($data);
        }

        public function update() 
        {
            
        }

        public function delete() 
        {
            
        }
    }