$(document).ready(function(){
    $(".btn-view").click(function () {
        $("#viewEnderecoModal").css("display", "block");

        let id = $(this).attr("id")

        viewEndereco(id);

    });

    // Ao clicar no botão de fechar, fechar o modal
    $("#close-modal-view").click(function () {
        $("#viewEnderecoModal").css("display", "none");
    });

    function viewEndereco(id) {
        const params={
            'operacao': 'view',
            'data': id
        };
        $.post('../model/crud-endereco.php', params, function(result) {
            console.log(result)
            $('input#pais').val(result.pais)
            $('input#estado').val(result.estado)
            $('input#cidade').val(result.cidade)
            $('input#bairro').val(result.bairro)
            $('input#rua').val(result.rua)
            $('input#numero').val(result.numero)
            $('input#logradouro').val(result.logradouro)
            $('input#idUsuario').val(result.idUsuario)


            $('input#id').val(result.id)
        }, 'json');
    }


})