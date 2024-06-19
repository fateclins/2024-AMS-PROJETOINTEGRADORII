$(document).ready(function(){
    
    $(".btn-edit").click(function () {
        $("#editPedidoModal").css("display", "block");

        let id = $(this).attr("id")
        viewPedido(id);

        $("input.id-pedido").attr('id', id);
    });

    // Ao clicar no botão de fechar, fechar o modal
    $("#close-modal-edit").click(function () {
        $("#editPedidoModal").css("display", "none");
    });

    // Ao clicar no botão de salvar, chamar a função createPedido
    $(".edit-pedido-btn").click(function (e) {
        e.preventDefault();

        let id = $("input.id-pedido").attr("id")


        editPedido(id);
        // Fechar o modal após salvar (ajuste conforme necessário)
        $("#addPedidoModal").css("display", "none");
    });

    function viewPedido(id) {
    
        const params = {
            'operacao': 'view',
            'data': id
        };
        $.post('../model/crud-pedido.php', params, function(result) {

            $('input#valorTotal').val(result.valorTotal)
            $('input#datap').val(result.datap)
            $('input#statusp').val(result.statusp)
            $('input#valorFinal').val(result.valorFinal)
            $('input#desconto').val(result.desconto)
            $('input#idUsuario').val(result.idUsuario)


            $('input#id').val(result.id)
        }, 'json');
    }

    function editPedido(id) {
        const formData = $("#edit-form").serialize();

        const params = {
            'operacao': 'update',
            'data': formData,
            'id': id
        };
    
        $.post('../model/crud-pedido.php', params, function(result) {
            location.reload();
            if(result.status === 1) {
                console.log('Pedido atualizada com sucesso');
            }else{
                console.log('Erro');
            }
        }, 'json');
        
    }
})