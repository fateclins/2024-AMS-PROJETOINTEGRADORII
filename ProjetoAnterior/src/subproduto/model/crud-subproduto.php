<?php

include '../../classes/Subproduto.php';

$subproduto = new Subproduto();

$operacao = $_POST['operacao'];

if ($operacao == "list") {
    echo json_encode($subproduto->list());
}

if ($operacao == "create") {
    $params = array();

    parse_str($_POST['data'], $params);
    $subproduto->formData = $params;

    echo json_encode($subproduto->create());
}

if ($operacao == "update") {
    $params = array();
    parse_str($_POST['data'], $params);
    $id = $_POST['id'];
    $subproduto->formData = $params;

    echo json_encode($subproduto->update($id));
}

if ($operacao == "delete") {
    $id = $_POST['data'];
    echo json_encode($subproduto->delete($id));
}

if ($operacao == "view") {
    $id = $_POST['data'];

    echo json_encode($subproduto->view($id));
}
