<?php
namespace App\Services;

require_once __DIR__ . '/../../vendor/autoload.php';

use App\Models\User;
use Firebase\JWT\JWT;
// use Firebase\JWT\Key;


class LoginService {

    public $user;
    
    public function __construct(){
        $this->user = new User();
    }

    public function post() {
        // Obtém os dados da requisição JSON
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);

        // Valida se os dados estão no formato JSON
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new \Exception('Dados devem ter formato JSON');
        }

        // Verifica se os campos obrigatórios estão presentes
        if (empty($data['email']) || empty($data['senha'])) {
            throw new \Exception('Email e senha são obrigatórios');
        }

        // Hash da senha para comparar com o banco
        $data['senha'] = hash('sha256', $data['senha']);

        // Busca o usuário pelo email e senha no banco de dados
        $result = $this->user->findUserByEmailAndPassword($data['email'], $data['senha']);

        $token = $this->user->generateJwtToken($result[0]['id'], $result[0]['email']);

        if (!$result) {
            // Retorna erro de autenticação se o usuário não for encontrado
            http_response_code(401);
            return [
                'error' => 'Credenciais inválidas. Verifique email ou senha.'
            ];
        }

        // Retorna os dados do usuário autenticado
        http_response_code(200);
        return [
            'message' => 'Login bem-sucedido!',
            'user' => $result,
            'token' => $token
        ];
    }
}