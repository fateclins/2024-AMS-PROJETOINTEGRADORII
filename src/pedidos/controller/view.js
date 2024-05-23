$(document).ready(function(){
    $(".btn-view").click(function () {
        $("#viewPedidoModal").css("display", "block");

        let id = $(this).attr("id")

        viewPedido(id);

    });

    // Ao clicar no botão de fechar, fechar o modal
    $("#close-modal-view").click(function () {
        $("#viewPedidoModal").css("display", "none");
    });

    function viewPedido(id) {
        const params={
            'operacao': 'view',
            'data': id
        };
        $.post('../model/crud-pedido.php', params, function(result) {
            console.log(result)
            $('input#valorTotal').val(result.valorTotal)
            $('input#datap').val(result.datap)
            $('input#statusp').val(result.statusp)
            $('input#valorFinal').val(result.valorFinal)
            $('input#desconto').val(result.desconto)
            $('input#idUsuario').val(result.idUsuario)


            $('input#id').val(result.id)
        }, 'json');
    }


})