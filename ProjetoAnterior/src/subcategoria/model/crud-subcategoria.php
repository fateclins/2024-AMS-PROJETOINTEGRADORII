<?php

include '../../classes/Subcategoria.php';

$subcategoria = new Subcategoria();

$operacao = $_POST['operacao'];

if ($operacao == "list") {
    echo json_encode($subcategoria->list());
}

if ($operacao == "create") {
    $params = array();

    parse_str($_POST['data'], $params);
    $subcategoria->formData = $params;

    echo json_encode($subcategoria->create());
}

if ($operacao == "update") {
    $params = array();
    parse_str($_POST['data'], $params);
    $id = $_POST['id'];
    $subcategoria->formData = $params;

    echo json_encode($subcategoria->update($id));
}

if ($operacao == "delete") {
    $id = $_POST['data'];
    echo json_encode($subcategoria->delete($id));
}

if ($operacao == "view") {
    $id = $_POST['data'];

    echo json_encode($subcategoria->view($id));
}
