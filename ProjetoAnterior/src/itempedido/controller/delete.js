$(document).ready(function(){
    
    $(".btn-delete").click(function () {
        $("#deleteItemPedidoModal").css("display", "block");
        let id = $(this).attr("id")
        console.log(id)

        $(".id-itempedido").attr('id', id);
    });

    // Ao clicar no botão de fechar, fechar o modal
    $(".close-modal-delete").click(function () {
        $("#deleteItemPedidoModal").css("display", "none");
    });

    // Ao clicar no botão de salvar, chamar a função createItemPedido
    $(".delete-itempedido-btn").click(function () {

        let id = $("input.id-itempedido").attr("id")

        deleteItemPedido(id);
        // Fechar o modal após salvar (ajuste conforme necessário)
        $("#addItemPedidoModal").css("display", "none");
    });

    function deleteItemPedido(id) {
        const params={
            'operacao': 'delete',
            'data': id
        };
        $.post('../model/crud-itempedido.php', params, function(result) {
            location.reload();
        }, 'json');
        
    }
})