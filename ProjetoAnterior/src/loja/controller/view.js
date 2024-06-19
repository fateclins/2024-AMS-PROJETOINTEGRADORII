$(document).ready(function(){
    $(".btn-view").click(function () {
        $("#viewLojaModal").css("display", "block");

        let id = $(this).attr("id")

        viewLoja(id);

    });

    // Ao clicar no botão de fechar, fechar o modal
    $("#close-modal-view").click(function () {
        $("#viewLojaModal").css("display", "none");
    });

    function viewLoja(id) {
        const params={
            'operacao': 'view',
            'data': id
        };
        $.post('../model/crud-loja.php', params, function(result) {
            console.log(result)
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


})