<?php

include '../../classes/ItemPedido.php';

$itempedido = new ItemPedido();

$operacao = $_POST['operacao'];

if ($operacao == "list") {
    echo json_encode($itempedido->list());
}

if ($operacao == "create") {
    $params = array();

    parse_str($_POST['data'], $params);
    $itempedido->formData = $params;

    echo json_encode($itempedido->create());
}

if ($operacao == "update") {
    $params = array();
    parse_str($_POST['data'], $params);
    $id = $_POST['id'];
    $itempedido->formData = $params;

    echo json_encode($itempedido->update($id));
}

if ($operacao == "delete") {
    $id = $_POST['data'];
    echo json_encode($itempedido->delete($id));
}

if ($operacao == "view") {
    $id = $_POST['data'];

    echo json_encode($itempedido->view($id));
}
