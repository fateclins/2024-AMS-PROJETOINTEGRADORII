$(document).ready(function(){
    $(".btn-view").click(function () {
        $("#viewItemPedidoModal").css("display", "block");

        let id = $(this).attr("id")

        viewItemPedido(id);

    });

    // Ao clicar no botão de fechar, fechar o modal
    $("#close-modal-view").click(function () {
        $("#viewItemPedidoModal").css("display", "none");
    });

    function viewItemPedido(id) {
        const params={
            'operacao': 'view',
            'data': id
        };
        $.post('../model/crud-itempedido.php', params, function(result) {
            console.log(result)
            $('input#qtdePedida').val(result.qtdePedida)
            $('input#qtdeAtendida').val(result.qtdeAtendida)
            $('input#valorItem').val(result.valorItem)
            $('input#idProduto').val(result.idProduto)


            $('input#id').val(result.id)
        }, 'json');
    }


})