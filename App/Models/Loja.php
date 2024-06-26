<?php
    namespace App\Models;

    use App\Models\Crud;
    use App\Models\Core;

    class Loja extends Crud
    {
        protected $core = null;
        public $table = 'LOJA';
        private $filters = null;
        protected $pk  = 'id';
        public $db;
       

        public function __construct(){
            $this->db = new Core();
        }
 
    }