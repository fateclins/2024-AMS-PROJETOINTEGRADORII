<?php
    // Headers para permitir CORS
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: http://localhost:5173"); // Especifique o domínio permitido
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    // Trate as requisições preflight
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }

    require_once '../vendor/autoload.php';

    if ($_GET['url']) {
        $url = explode('/', $_GET['url']);

        if ($url[0] === 'api') {
            array_shift($url);

            $service = 'App\Services\\'.ucfirst($url[0]).'Service';
            array_shift($url);

            $method = strtolower($_SERVER['REQUEST_METHOD']);
            try {

                $response = call_user_func_array(array(new $service, $method), $url);

                // http_response_code(200);
                echo json_encode($response);
                exit;

            } catch (\Exception $e) {
                http_response_code(404);
                array('errors' => ['message' => $e->getMessage()]);
                // echo json_encode(array('status' => 'error', 'data' => $e->getMessage()), JSON_UNESCAPED_UNICODE);
                exit;
            }
        } else{
            http_response_code(404);
            echo "Caminho não encontrado";
        }
    }
    