$(document).ready(function() {  
        const baseUrl = window.location.origin; // Obtém a raiz do URL atual
        const filePath = baseUrl + '/Login-tray/login/model/crud-usuario.php'; //Ajustavel de acordo com a organização das pastas do projeto

    $("#btn-login").click(function(e) {
        e.preventDefault()
        login();
    })

    function login() {
        let email = $("#email").val();
        let senha = $("#senha").val();

        const params = {
            'operacao': 'login',
            'email': email,
            'senha': senha
        };
        

        // Validação pelo tipo de usuario cada tipo acessara uma visao diferente
        $.post(filePath, params, function(result) {
            console.log(result);
            if(result.tipo == 1 && result.status == 1) {
                window.location.replace("home.html"); //Ajustavel de acordo com a organização das pastas do projeto
            }else if(result.tipo == 2 && result.status == 1) {
                window.location.replace("home2.html"); //Ajustavel de acordo com a organização das pastas do projeto
            }else{ 
                // Define a mensagem no modal
                document.getElementById("alertMessage").innerText = result.mensagem;
                
                // Exibe o modal
                var modal = document.getElementById("alertModal");
                $("#alertModal").css("display", "block");

                // Fecha o modal automaticamente após 2 segundos
                setTimeout(function() {
                    modal.style.display = "none";
                }, 2000);
            }
        }, 'json');
    }

    // função para logar com o botão enter
    var buttonEntrar = document.getElementById('btn-login');
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            buttonEntrar.click();
    }
    });

})