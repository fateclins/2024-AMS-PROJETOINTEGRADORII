$(document).ready(function() {
        const baseUrl = window.location.origin; // Obtém a raiz do URL atual
        const filePath = baseUrl + '/Login-tray/login/model/crud-usuario.php'; //Ajustavel de acordo com a organização das pastas do projeto
        
    $("#btn-logout").click(function() {
        logout();
    });


    function logout() {
        const params = {
            'operacao': 'logout'
        };

        $.post(filePath, params, function(result) {
            window.location.replace("index.html"); //Ajustavel de acordo com a organização das pastas do projeto
        }, 'json');

    }

    function validateUser() {

        const params = {
            'operacao': 'validate',
        };

        $.post(filePath, params, function(result) {
            console.log("post");
            if(result.tipo == 1 && result.status === 1) {
                $("#email-usuario").append(result.email)
            }else if(result.tipo == 2 && result.status == 1) {
                $("#email-usuario").append(result.email)
            } else{
                console.log("else");
                window.location.replace("index.html"); //Ajustavel de acordo com a organização das pastas do projeto
            }
        }, 'json');
    }

    validateUser()
})