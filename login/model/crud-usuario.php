<?php

include '../../Classes/Usuario.php'; //Ajustavel de acordo com a organização das pastas do projeto

$user = new Usuario();

$operacao = $_POST['operacao'];

if($operacao == "login"){
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    echo json_encode($user->login($email, $senha));
}

if($operacao == "logout"){
    echo json_encode($user->logout());
}

if($operacao == "validate"){
    echo json_encode($user->validate());
}