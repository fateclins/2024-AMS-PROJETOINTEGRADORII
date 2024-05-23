$(document).ready(function(){
    
    $(".btn-edit").click(function () {
        $("#editLojaModal").css("display", "block");

        let id = $(this).attr("id")
        viewLoja(id);

        $("input.id-loja").attr('id', id);
    });

    // Ao clicar no botão de fechar, fechar o modal
    $("#close-modal-edit").click(function () {
        $("#editLojaModal").css("display", "none");
    });

    // Ao clicar no botão de salvar, chamar a função createLoja
    $(".edit-loja-btn").click(function (e) {
        e.preventDefault();

        let id = $("input.id-loja").attr("id")


        editLoja(id);
        // Fechar o modal após salvar (ajuste conforme necessário)
        $("#addLojaModal").css("display", "none");
    });

    function viewLoja(id) {
    
        const params = {
            'operacao': 'view',
            'data': id
        };
        $.post('../model/crud-loja.php', params, function(result) {

            $('input#nome').val(result.nome)
            $('input#logo').val(result.logo)
            $('input#banner').val(result.banner)
            $('input#qtdproduto').val(result.qtdproduto)
            $('input#corfundo').val(result.corfundo)
            $('input#corfonte').val(result.corfonte)
            $('input#area').val(result.area)
            $('input#cnpj').val(result.cnpj)
            $('input#idUsuario').val(result.idUsuario)


            $('input#id').val(result.id)
        }, 'json');
    }

    function editLoja(id) {
        const formData = $("#edit-form").serialize();

        const params = {
            'operacao': 'update',
            'data': formData,
            'id': id
        };
    
        $.post('../model/crud-loja.php', params, function(result) {
            location.reload();
            if(result.status === 1) {
                console.log('Loja atualizada com sucesso');
            }else{
                console.log('Erro');
            }
        }, 'json');
        
    }
})