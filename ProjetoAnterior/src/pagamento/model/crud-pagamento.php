<?php

include '../../classes/Pagamento.php';

$pagamento = new Pagamento();

$operacao = $_POST['operacao'];

if ($operacao == "list") {
    echo json_encode($pagamento->list());
}

if ($operacao == "create") {
    $params = array();

    parse_str($_POST['data'], $params);
    $pagamento->formData = $params;

    echo json_encode($pagamento->create());
}

if ($operacao == "update") {
    $params = array();
    parse_str($_POST['data'], $params);
    $id = $_POST['id'];
    $pagamento->formData = $params;

    echo json_encode($pagamento->update($id));
}

if ($operacao == "delete") {
    $id = $_POST['data'];
    echo json_encode($pagamento->delete($id));
}

if ($operacao == "view") {
    $id = $_POST['data'];

    echo json_encode($pagamento->view($id));
}
