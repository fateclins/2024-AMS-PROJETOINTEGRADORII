$(document).ready(function(){
    // Ao clicar no botão, exibir o modal
    $("#add-loja-btn").click(function () {
        $("#addLojaModal").css("display", "block");
    });

    // Ao clicar no botão de fechar, fechar o modal
    $("#close-modal").click(function () {
        $("#addLojaModal").css("display", "none");
    });

    // Ao clicar no botão de salvar, chamar a função createLoja
    $("#save-loja-btn").click(function () {
        createLoja();
        // Fechar o modal após salvar (ajuste conforme necessário)
        $("#addLojaModal").css("display", "none");
    });

    function createLoja() {
        const formData = $("#create-form").serialize();
    
        const params = {
            'operacao': 'create',
            'data': formData
        };
    
        $.post('../model/crud-loja.php', params, function(result) {
            console.log(result);
            location.reload();
            if(result.status === 1) {
                console.log('Loja criada com sucesso');
            }else{
                console.log('Erro');
            }
        }, 'json');
        
    }
})