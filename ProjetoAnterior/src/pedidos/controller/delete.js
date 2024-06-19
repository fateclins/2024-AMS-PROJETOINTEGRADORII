$(document).ready(function(){
    
    $(".btn-delete").click(function () {
        $("#deletePedidoModal").css("display", "block");
        let id = $(this).attr("id")
        console.log(id)

        $(".id-pedido").attr('id', id);
    });

    // Ao clicar no botão de fechar, fechar o modal
    $(".close-modal-delete").click(function () {
        $("#deletePedidoModal").css("display", "none");
    });

    // Ao clicar no botão de salvar, chamar a função createPedido
    $(".delete-pedido-btn").click(function () {

        let id = $("input.id-pedido").attr("id")

        deletePedido(id);
        // Fechar o modal após salvar (ajuste conforme necessário)
        $("#addPedidoModal").css("display", "none");
    });

    function deletePedido(id) {
        const params={
            'operacao': 'delete',
            'data': id
        };
        $.post('../model/crud-pedido.php', params, function(result) {
            location.reload();
        }, 'json');
        
    }
})