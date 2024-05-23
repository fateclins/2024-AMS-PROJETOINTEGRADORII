<?php

include '../../classes/Endereco.php';

$endereco = new Endereco();

$operacao = $_POST['operacao'];

if ($operacao == "list") {
    echo json_encode($endereco->list());
}

if ($operacao == "create") {
    $params = array();

    parse_str($_POST['data'], $params);
    $endereco->formData = $params;

    echo json_encode($endereco->create());
}

if ($operacao == "update") {
    $params = array();
    parse_str($_POST['data'], $params);
    $id = $_POST['id'];
    $endereco->formData = $params;

    echo json_encode($endereco->update($id));
}

if ($operacao == "delete") {
    $id = $_POST['data'];
    echo json_encode($endereco->delete($id));
}

if ($operacao == "view") {
    $id = $_POST['data'];

    echo json_encode($endereco->view($id));
}
