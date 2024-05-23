<?php

include '../../classes/Pedido.php';

$pedido = new Pedido();

$operacao = $_POST['operacao'];

if ($operacao == "list") {
    echo json_encode($pedido->list());
}

if ($operacao == "create") {
    $params = array();

    parse_str($_POST['data'], $params);
    $pedido->formData = $params;

    echo json_encode($pedido->create());
}

if ($operacao == "update") {
    $params = array();
    parse_str($_POST['data'], $params);
    $id = $_POST['id'];
    $pedido->formData = $params;

    echo json_encode($pedido->update($id));
}

if ($operacao == "delete") {
    $id = $_POST['data'];
    echo json_encode($pedido->delete($id));
}

if ($operacao == "view") {
    $id = $_POST['data'];

    echo json_encode($pedido->view($id));
}
