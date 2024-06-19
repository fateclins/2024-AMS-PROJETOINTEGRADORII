$(document).ready(function(){
    // Ao clicar no botão, exibir o modal
    $("#add-pedido-btn").click(function () {
        $("#addPedidoModal").css("display", "block");
    });

    // Ao clicar no botão de fechar, fechar o modal
    $("#close-modal").click(function () {
        $("#addPedidoModal").css("display", "none");
    });

    // Ao clicar no botão de salvar, chamar a função createPedido
    $("#save-pedido-btn").click(function () {
        createPedido();
        // Fechar o modal após salvar (ajuste conforme necessário)
        $("#addPedidoModal").css("display", "none");
    });

    function createPedido() {
        const formData = $("#create-form").serialize();
    
        const params = {
            'operacao': 'create',
            'data': formData
        };
    
        $.post('../model/crud-pedido.php', params, function(result) {
            console.log(result);
            location.reload();
            if(result.status === 1) {
                console.log('Pedido criada com sucesso');
            }else{
                console.log('Erro');
            }
        }, 'json');
        
    }
})