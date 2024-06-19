$(document).ready(function(){
    // Ao clicar no botão, exibir o modal
    $("#add-endereco-btn").click(function () {
        $("#addEnderecoModal").css("display", "block");
    });

    // Ao clicar no botão de fechar, fechar o modal
    $("#close-modal").click(function () {
        $("#addEnderecoModal").css("display", "none");
    });

    // Ao clicar no botão de salvar, chamar a função createEndereco
    $("#save-endereco-btn").click(function () {
        createEndereco();
        // Fechar o modal após salvar (ajuste conforme necessário)
        $("#addEnderecoModal").css("display", "none");
    });

    function createEndereco() {
        const formData = $("#create-form").serialize();
    
        const params = {
            'operacao': 'create',
            'data': formData
        };
    
        $.post('../model/crud-endereco.php', params, function(result) {
            console.log(result);
            location.reload();
            if(result.status === 1) {
                console.log('Endereco criada com sucesso');
            }else{
                console.log('Erro');
            }
        }, 'json');
        
    }
})