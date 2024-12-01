<?php
    namespace App\Models;

    use App\Models\Crud;
    use App\Models\Core;

    class Product extends Crud
    {
        protected $core = null;
        public $table = 'produto';
        private $filters = null;
        protected $pk  = 'id';
        public $db;
       
        public $filtables = array(
           'valor' => "required",
           'qtde' => "required"
        );

        public function __construct(){
            $this->db = new Core();
            $this->getColumns();
        }

     
        
    }
