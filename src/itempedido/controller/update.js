$(document).ready(function(){
    
    $(".btn-edit").click(function () {
        $("#editItemPedidoModal").css("display", "block");

        let id = $(this).attr("id")
        viewItemPedido(id);

        $("input.id-itempedido").attr('id', id);
    });

    // Ao clicar no botão de fechar, fechar o modal
    $("#close-modal-edit").click(function () {
        $("#editItemPedidoModal").css("display", "none");
    });

    // Ao clicar no botão de salvar, chamar a função createItemPedido
    $(".edit-itempedido-btn").click(function (e) {
        e.preventDefault();

        let id = $("input.id-itempedido").attr("id")


        editItemPedido(id);
        // Fechar o modal após salvar (ajuste conforme necessário)
        $("#addItemPedidoModal").css("display", "none");
    });

    function viewItemPedido(id) {
    
        const params = {
            'operacao': 'view',
            'data': id
        };
        $.post('../model/crud-itempedido.php', params, function(result) {

            $('input#qtdePedida').val(result.qtdePedida)
            $('input#qtdeAtendida').val(result.qtdeAtendida)
            $('input#valorItem').val(result.valorItem)
            $('input#idProduto').val(result.idProduto)


            $('input#id').val(result.id)
        }, 'json');
    }

    function editItemPedido(id) {
        const formData = $("#edit-form").serialize();

        const params = {
            'operacao': 'update',
            'data': formData,
            'id': id
        };
    
        $.post('../model/crud-itempedido.php', params, function(result) {
            location.reload();
            if(result.status === 1) {
                console.log('ItemPedido atualizada com sucesso');
            }else{
                console.log('Erro');
            }
        }, 'json');
        
    }
})