$(document).ready(function(){
    // Ao clicar no botão, exibir o modal
    $("#add-itempedido-btn").click(function () {
        $("#addItemPedidoModal").css("display", "block");
    });

    // Ao clicar no botão de fechar, fechar o modal
    $("#close-modal").click(function () {
        $("#addItemPedidoModal").css("display", "none");
    });

    // Ao clicar no botão de salvar, chamar a função createItemPedido
    $("#save-itempedido-btn").click(function () {
        createItemPedido();
        // Fechar o modal após salvar (ajuste conforme necessário)
        $("#addItemPedidoModal").css("display", "none");
    });

    function createItemPedido() {
        const formData = $("#create-form").serialize();
    
        const params = {
            'operacao': 'create',
            'data': formData
        };
    
        $.post('../model/crud-itempedido.php', params, function(result) {
            console.log(result);
            location.reload();
            if(result.status === 1) {
                console.log('ItemPedido criada com sucesso');
            }else{
                console.log('Erro');
            }
        }, 'json');
        
    }
})