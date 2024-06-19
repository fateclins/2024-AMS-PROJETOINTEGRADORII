$(document).ready(function() {

    $("#btn-login").click(function() {
        login();
    })

    function login() {
        let usuario = $("#usuario-name").val();
        let senha = $("#usuario-senha").val();

        const params = {
            'operacao': 'login',
            'usuario': usuario,
            'senha': senha
        };

        $.post('src/usuario/model/crud-usuario.php', params, function(result) {
            console.log(result);
            if(result.tipo == 1 && result.status == 1) {
                console.log('Sucesso Login');
                window.location.replace("index.html");
            } else{
                console.log('Erro Login');
            }
        }, 'json');
    }

})